import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

export async function getProducts() {
  const productsResponse = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = productsResponse.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const priceAmount = price.unit_amount ? price.unit_amount / 100 : 0

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(priceAmount),
    }
  })

  return products
}
