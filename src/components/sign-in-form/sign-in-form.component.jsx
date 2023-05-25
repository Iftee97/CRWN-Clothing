import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../../contexts/user.context'

import { db, auth } from '../../utils/firebase/firebase.utils'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'

import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {
  SignInContainer,
  ButtonsContainer,
  GoogleButtonContainer,
} from './sign-in-form.styles.js'

import { FaGoogle } from "react-icons/fa"

export default function SignInForm() {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
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
    const { email, password } = formFields

    try {
      setLoading(true)
      const response = await signInWithEmailAndPassword(auth, email, password)
      const user = response.user
      console.log('signed in user: >>>>>>>>>>>>>>>>', user)
      dispatch({ type: 'LOGIN', payload: user })
      setLoading(false)
    } catch (error) {
      console.log('error signing in user!', error.message)
      alert(error.message)
      setLoading(false)
    } finally {
      setFormFields({
        email: '',
        password: '',
      })
      navigate('/') // redirect to home page
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const response = await signInWithPopup(auth, provider)
      const user = response.user
      console.log('signed in user: >>>>>>>>>>>>>>>>', user)
      dispatch({ type: 'LOGIN', payload: user })

      // // Check for user in firestore db -- if user doesn't exist in db, add user to db
      const docSnapshot = await getDoc(doc(db, 'users', user.uid))
      if (!docSnapshot.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          displayName: user.displayName,
          createdAt: serverTimestamp(),
        })
      }
    } catch (error) {
      console.log("error creating user!", error.message)
      alert(error.message)
    } finally {
      navigate('/') // redirect to home page
    }
  }

  return (
    <SignInContainer>
      <h2>
        Already have an account?
      </h2>
      <span>
        Sign in with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          id='sign-in-email'
          name='email'
          value={formFields.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          type='password'
          id='sign-in-password'
          name='password'
          value={formFields.password}
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type='submit' disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            <GoogleButtonContainer>
              <span>
                Sign in with Google
              </span>
              <FaGoogle />
            </GoogleButtonContainer>
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}
