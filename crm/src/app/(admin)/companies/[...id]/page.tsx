'use client'

import Header from '@/app/components/header'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'

interface PageProps {
  params: { id: string }
  // params: { id: string[] }
}

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
// }

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id)
    if (Number.isNaN(id)) {
      notFound()
    }
  }, [params.id])

  return (
    <>
      <Header>Companies ({params.id})</Header>

      {/* <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p> */}
    </>
  )
}
