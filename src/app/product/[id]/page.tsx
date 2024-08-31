import Product from './_components/product'

import { getProductById } from './actions'

export default async function Page({ params }: { params: { id: string } }) {
  const productById = await getProductById(params.id)

  return <Product {...productById} />
}
