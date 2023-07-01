import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../button/button.component'
import './payment-form.styles.scss'

export default function PaymentForm() {
  const { user } = useContext(UserContext)
  const { getCartTotal, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const stripe = useStripe()
  const elements = useElements()
  const amount = getCartTotal()

  async function paymentHandler(e) {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    if (!user) {
      alert('You must be logged in to make a payment.')
      return
    }
    try {
      setIsProcessingPayment(true)
      const response = await fetch('http://localhost:3000/api/create-payment-intent', {
        method: 'POST',
        body: JSON.stringify({
          amount: amount * 100,
        }),
      })
      const data = await response.json()
      const clientSecret = data.client_secret
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user ? user.displayName : 'some username',
          },
        },
      })
      // console.log('paymentIntent: >>>>>>>>>', paymentIntent)
      if (error) {
        throw new Error(error.message)
      } else if (paymentIntent.status === 'succeeded') {
        clearCart()
        navigate('/')
        alert('Payment Successful!')
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setIsProcessingPayment(false)
    }
  }

  return (
    <div className='payment-form-container'>
      <form className='payment-form' onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button
          buttonType='inverted'
          isLoading={isProcessingPayment}
          style={{ marginTop: '2rem' }}
        >
          Pay Now
        </Button>
      </form>
    </div>
  )
}
