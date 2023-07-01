import stripe from 'stripe'

export async function createPaymentIntent(amount) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    })
    return paymentIntent
  } catch (error) {
    console.log(error)
  }
}

// this is experimental and does not work, this needs more work
