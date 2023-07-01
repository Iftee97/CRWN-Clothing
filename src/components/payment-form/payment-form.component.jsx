import { useState, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../button/button.component'
import { createPaymentIntent } from '../../utils/stripe/createPaymentIntent'

import './payment-form.styles.scss'

export default function PaymentForm() {
  const { user } = useContext(UserContext)
  const { getCartTotal } = useContext(CartContext)

  const stripe = useStripe()
  const elements = useElements()
  const amount = getCartTotal() * 100

  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  async function paymentHandler(e) {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    const response = await createPaymentIntent(amount)
    console.log('response: >>>>>>>>>>>>', response)
    try {
      setIsProcessingPayment(true)
    } catch (error) {
      console.log('error: >>>>>>>>>>>>', error)
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
