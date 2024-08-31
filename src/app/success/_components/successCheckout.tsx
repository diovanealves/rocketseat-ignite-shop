import Image from 'next/image'

import Link from 'next/link'
import { getCheckoutSuccess } from '../actions'

interface SuccessCheckoutProps {
  sessionId: string
}

export async function SuccessCheckout({ sessionId }: SuccessCheckoutProps) {
  const checkoutProduct = await getCheckoutSuccess(sessionId)

  return (
    <main className="mx-auto flex h-[656] flex-col items-center justify-center">
      <h1 className="text-2xl text-gray-100">Compra efetuada!</h1>

      <div className="mt-16 flex h-36 w-full max-w-36 items-center justify-center rounded-lg bg-gradient-to-t from-[#1ea483] to-[#7465d4] p-1">
        <Image
          src={checkoutProduct.product.imageUrl}
          width={144}
          height={144}
          alt={`Imagem da camise do ${checkoutProduct.product.name}`}
          className="object-cover"
        />
      </div>

      <p className="mt-8 max-w-xl text-center text-xl leading-6 text-gray-300">
        Uhuul <strong>{checkoutProduct.costumerName}</strong>, sua{' '}
        <strong>{checkoutProduct.product.name}</strong> já está a caminho da sua
        casa.
      </p>

      <Link
        href={'/'}
        className="mt-20 block text-lg font-bold text-green-500 hover:text-green-300"
      >
        Voltar ao catálago
      </Link>
    </main>
  )
}
