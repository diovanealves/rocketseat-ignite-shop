import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

export async function getCheckoutSuccess(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    costumerName,
    product: {
      name: product.name,
      imageUrl: product.images[0],
    },
  }
}
