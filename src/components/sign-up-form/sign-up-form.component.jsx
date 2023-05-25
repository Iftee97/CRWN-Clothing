import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../../contexts/user.context'

import { db, auth } from '../../utils/firebase/firebase.utils'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { SignUpContainer } from './sign-up-form.styles.js'

export default function SignUpForm() {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const { dispatch } = useContext(UserContext)

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
      console.log('signed up user: >>>>>>>>>>>>>>>>', user)
      dispatch({ type: 'LOGIN', payload: user })

      await updateProfile(user, { displayName }) // update user profile with displayName
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        displayName: user.displayName,
        createdAt: serverTimestamp(),
      }) // add user to firestore db

      setLoading(false)
    } catch (error) {
      console.log('error creating user!', error.message)
      alert(error.message)
      setLoading(false)
    } finally {
      setFormFields({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }) // reset form fields
      navigate('/') // redirect to home
    }

    console.log('form submitted: >>>>>>>>>>>', formFields)
  }

  return (
    <SignUpContainer>
      <h2>
        Don't have an account?
      </h2>
      <span>
        Sign up with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Username'
          type='text'
          id='displayName'
          name='displayName'
          value={formFields.displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Email'
          type='email'
          id='sign-up-email'
          name='email'
          value={formFields.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          type='password'
          id='sign-up-password'
          name='password'
          value={formFields.password}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          value={formFields.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type='submit' disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </form>
    </SignUpContainer>
  )
}
