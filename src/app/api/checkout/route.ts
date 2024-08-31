import { stripe } from '@/lib/stripe'
import { NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function POST(request: Request, response: NextApiResponse) {
  const data = await request.json()

  if (!data.priceId) {
    return response.status(400).json({ error: 'Price ID is required' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: data.priceId,
        quantity: 1,
      },
    ],
  })

  return NextResponse.json({ checkoutURL: checkoutSession.url })
}
