import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
