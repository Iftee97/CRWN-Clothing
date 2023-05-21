import { createContext, useState, useEffect } from "react"

// firebase imports
import { db } from "../utils/firebase/firebase.utils.js"
import { collection, writeBatch, doc } from "firebase/firestore"

import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext()

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([])

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

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
