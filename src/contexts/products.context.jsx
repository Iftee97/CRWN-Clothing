import { createContext } from "react"

import products from '../shop-data.json'

export const ProductsContext = createContext()

export const ProductsContextProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
