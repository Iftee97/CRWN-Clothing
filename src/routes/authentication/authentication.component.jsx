import { db, auth } from "../../utils/firebase/firebase.utils"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"

import { AuthenticationContainer } from './authentication.styles.js'

export default function SignIn() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}
