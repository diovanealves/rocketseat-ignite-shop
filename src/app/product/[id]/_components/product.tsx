'use client'

import { api } from '@/lib/axios'
import Image from 'next/image'

interface ProductProps {
  id: string
  name: string
  description: string | null
  imageUrl: string
  price: string
  defaultPriceId: string
}

export default function Product(props: ProductProps) {
  async function handleBuyProduct() {
    try {
      const response = await api.post('/api/checkout', {
        priceId: props.defaultPriceId,
      })

      const { checkoutURL } = response.data
      window.location.href = checkoutURL
    } catch (error) {
      alert('Falha ao redirecionar para a tela de checkout')
    }
  }

  return (
    <main className="mx-auto grid w-11/12 max-w-screen-2xl grid-cols-2 place-items-center items-stretch gap-16">
      <div className="flex h-[656] w-full max-w-xl items-center justify-center rounded-lg bg-gradient-to-t from-[#1ea483] to-[#7465d4] p-1">
        <Image
          src={props.imageUrl}
          width={480}
          height={480}
          alt="Camiseta"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl text-gray-300">{props.name}</h1>
        <span className="mt-4 block text-2xl text-green-300">
          {props.price}
        </span>

        <p className="mt-10 text-md leading-7 text-gray-300">
          {props.description}
        </p>

        <button
          onClick={() => handleBuyProduct()}
          className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-md font-bold text-white hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Comprar agora
        </button>
      </div>
    </main>
  )
}
