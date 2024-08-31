import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

export async function getProductById(id: string) {
  const product = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  const priceAmount = price.unit_amount ? price.unit_amount / 100 : 0

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(priceAmount),
    defaultPriceId: price.id,
  }
}
