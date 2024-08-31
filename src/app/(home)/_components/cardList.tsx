'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'

import { Card } from './card'

export interface CardListProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export async function CardList({ products }: CardListProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    },
  })

  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))] flex-row"
    >
      {products.map((product) => {
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Card>
              <Card.Image src={product.imageUrl} alt={product.name} />
              <Card.Footer>
                <Card.Title title={product.name} />
                <Card.Price price={product.price} />
              </Card.Footer>
            </Card>
          </Link>
        )
      })}
    </main>
  )
}
