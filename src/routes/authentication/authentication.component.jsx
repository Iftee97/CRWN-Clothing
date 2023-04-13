import { db, auth } from "../../utils/firebase/firebase.utils"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

import './authentication.styles.scss'

export default function SignIn() {
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const response = await signInWithPopup(auth, provider)
      const user = response.user
      console.log('signed in user:', user)

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
    }
  }

  return (
    <div className="">
      <h1>
        Sign In Page
      </h1>
      <button onClick={loginWithGoogle}>
        Sign in with Google
      </button>
      <SignUpForm />
    </div>
  )
}
