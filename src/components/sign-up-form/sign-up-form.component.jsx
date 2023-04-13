import { useState } from 'react'

import { db, auth } from '../../utils/firebase/firebase.utils'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

import './sign-up-form.styles.scss'

export default function SignUpForm() {
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = formFields

    try {
      setLoading(true)

      if (password !== confirmPassword) {
        alert('Passwords do not match')
        return // exit the function
      }

      const response = await createUserWithEmailAndPassword(auth, email, password)
      const user = response.user
      console.log('signed up user:', user)

      await updateProfile(user, { displayName }) // update user profile with displayName

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        displayName: user.displayName,
        createdAt: serverTimestamp(),
      }) // add user to firestore db

      setLoading(false)
    } catch (error) {
      console.log('error creating user!', error.message)
      setLoading(false)
    } finally {
      setFormFields({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }) // reset form fields
    }

    console.log('form submitted: >>>>>>>>>>>', formFields)
  }

  return (
    <div>
      <h2>
        Don't have an account?
      </h2>
      <span>
        Sign up with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">
          Username
        </label>
        <input
          type="text"
          id='displayName'
          name='displayName'
          value={formFields.displayName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id='email'
          name='email'
          value={formFields.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id='password'
          name='password'
          value={formFields.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="password"
          id='confirmPassword'
          name='confirmPassword'
          value={formFields.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type='submit' disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
    </div>
  )
}
