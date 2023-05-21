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

    // // refactor to use reduce
    // return cartItems.reduce((accumulatedQuantity, cartItem) => (
    //   accumulatedQuantity + cartItem.quantity
    // ), 0)
  }

  function increaseQuantity(productToIncrease) {
    setCartItems(
      cartItems.map((cartItem) => cartItem.id === productToIncrease.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      )
    )
  }

  function decreaseQuantity(productToDecrease) {
    if (productToDecrease.quantity === 1) {
      removeItemFromCart(productToDecrease)
    } else {
      setCartItems(
        cartItems.map((cartItem) => cartItem.id === productToDecrease.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
        )
      )
    }
  }

  function removeItemFromCart(productToRemove) {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== productToRemove.id))
  }

  function getCartTotal() {
    let total = 0
    for (const cartItem of cartItems) {
      total += cartItem.quantity * cartItem.price
    }
    return total

    // // refactor to use reduce
    // return cartItems.reduce((accumulatedTotal, cartItem) => (
    //   accumulatedTotal + cartItem.quantity * cartItem.price
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
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
