export default async function handler(request, response) {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.status(200).json({
    text: 'Hello World! Welcoming you to my vercel serverless function.'
  })
}

// vercel dev to run serverless functions locally
// vercel --prod to deploy to production