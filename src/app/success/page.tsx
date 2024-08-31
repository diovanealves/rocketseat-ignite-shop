'use client'

import { redirect, useSearchParams } from 'next/navigation'
import { SuccessCheckout } from './_components/successCheckout'

export default function Success() {
  const sessionId = useSearchParams().get('session_id')

  if (!sessionId) {
    return redirect('/')
  }

  return <SuccessCheckout sessionId={sessionId!} />
}
