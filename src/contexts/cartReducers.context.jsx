import { createContext, useReducer } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CartContextUsingReducers = createContext()

const initialState = {
  isCartOpen: false,
  cartItems: []
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'SET_IS_CART_OPEN':
      return { ...state, isCartOpen: action.payload }

    case 'ADD_ITEM_TO_CART':
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      )
      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
        }
      }

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }

    case 'DECREASE_QUANTITY':
      if (action.payload.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          )
        }
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        }
      }

    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )
      }

    default:
      return state
  }
}

export function CartContextUsingReducersProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [cartItems, setCartItems] = useLocalStorage('cartItems', state.cartItems)

  function addItemToCart(productToAdd) {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: productToAdd })
  }

  function increaseQuantity(productToIncrease) {
    dispatch({ type: 'INCREASE_QUANTITY', payload: productToIncrease })
  }

  function decreaseQuantity(productToDecrease) {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productToDecrease })
  }

  function removeItemFromCart(productToRemove) {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: productToRemove })
  }

  const {
    isCartOpen,
    cartItems: updatedCartItems
  } = state

  function setIsCartOpen(isOpen) {
    dispatch({ type: 'SET_IS_CART_OPEN', payload: isOpen })
  }

  function getCartItemsCount() {
    return updatedCartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
  }

  function getCartTotal() {
    return updatedCartItems.reduce((accumulatedTotal, cartItem) => accumulatedTotal + cartItem.quantity * cartItem.price, 0)
  }

  // console.log('cartItems: >>>>>>>>>>', updatedCartItems)

  return (
    <CartContextUsingReducers.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems: updatedCartItems,
        setCartItems,
        addItemToCart,
        getCartItemsCount,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
        getCartTotal
      }}
    >
      {children}
    </CartContextUsingReducers.Provider>
  )
}
