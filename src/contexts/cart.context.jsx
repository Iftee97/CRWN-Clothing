import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  function addItemToCart(productToAdd) {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    // If it is, increase the quantity, otherwise add it to the cart
    if (existingCartItem) {
      setCartItems(
        cartItems.map((cartItem) => cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }])
    }
  }

  function getCartItemsCount() {
    let totalQuantity = 0
    for (const cartItem of cartItems) {
      totalQuantity += cartItem.quantity
    }
    return totalQuantity

    // refactor to use reduce
    // return cartItems.reduce((accumulatedQuantity, cartItem) => (
    //   accumulatedQuantity + cartItem.quantity
    // ), 0)
  }

  console.log('cartItems: >>>>>>>>>>', cartItems)

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        addItemToCart,
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
