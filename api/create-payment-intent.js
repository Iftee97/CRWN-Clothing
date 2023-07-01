import stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const stripeInstance = stripe(process.env.VITE_APP_STRIPE_SECRET_KEY)

export default async function handler(request, response) {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('Access-Control-Allow-Origin', '*')
  try {
    const { amount } = JSON.parse(request.body)
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    })
    response.status(200).json(paymentIntent)
  } catch (error) {
    response.status(500).json({ statusCode: 500, message: error.message })
  }
}

// vercel --prod to deploy serverless function to production
