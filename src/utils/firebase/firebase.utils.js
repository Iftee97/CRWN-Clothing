import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyApnTeW6jEI17Ir0nMeWgVfs0GP9Vk-3cw",
  authDomain: "crwn-clothing-190e0.firebaseapp.com",
  projectId: "crwn-clothing-190e0",
  storageBucket: "crwn-clothing-190e0.appspot.com",
  messagingSenderId: "981767945700",
  appId: "1:981767945700:web:91972bb56d5cac49ccdbf1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Intialize firebase services
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth
}
