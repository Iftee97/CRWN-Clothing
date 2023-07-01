import { createContext, useState, useEffect } from "react"

// firebase imports
import { db } from "../utils/firebase/firebase.utils.js"
import { collection, writeBatch, doc, query, getDocs } from "firebase/firestore"

import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext()

export function CategoriesContextProvider({ children }) {
  const [categories, setCategories] = useState([])

  // // add shop data to firestore database (run once, because it's already in the database)
  // useEffect(() => {
  //   addCollectionAndDocuments('collections', SHOP_DATA)
  // }, [])

  // // add shop data to firestore database
  // async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  //   const batch = writeBatch(db)
  //   const collectionRef = collection(db, collectionKey)

  //   objectsToAdd.forEach((object) => {
  //     const docRef = doc(collectionRef, object.title.toLowerCase())
  //     batch.set(docRef, object)
  //   })

  //   await batch.commit()
  //   console.log('done')
  // }

  // get shop data from firestore database -- not necessarily real-time data
  useEffect(() => {
    const q = query(collection(db, "collections"))
    const querySnapshot = getDocs(q)
    querySnapshot.then((snapshot) => {
      const shopData = snapshot.docs.map((doc) => doc.data())
      setCategories(shopData)
    })
  }, [])

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  )
}
