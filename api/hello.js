export default async function handler(request, response) {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('Access-Control-Allow-Origin', '*')
  // console.log('STRIPE_SECRET_KEY: >>>>>>>>>', process.env.VITE_APP_STRIPE_SECRET_KEY)
  response.status(200).json({
    text: 'Hello World! Welcoming you to my vercel serverless function.'
  })
}

// vercel --prod to deploy serverless function to production
