import Image from 'next/image'
import { ReactNode } from 'react'

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="keen-slider__slide group relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-t from-[#1ea483] to-[#7465d4]">
      {children}
    </div>
  )
}

function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      width={480}
      height={480}
      alt={alt}
      className="object-cover"
    />
  )
}

function CardFooter({ children }: { children: ReactNode }) {
  return (
    <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-footer p-2 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
      {children}
    </footer>
  )
}

function CardTitle({ title }: { title: string }) {
  return <h3 className="text-lg">{title}</h3>
}

function CardPrice({ price }: { price: string }) {
  return <p className="text-lg font-bold text-green-300">{price}</p>
}

Card.Image = CardImage
Card.Footer = CardFooter
Card.Title = CardTitle
Card.Price = CardPrice

export { Card }
