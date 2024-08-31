import { CardList } from './_components/cardList'

import { getProducts } from './actions'

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <CardList products={products} />
    </>
  )
}
