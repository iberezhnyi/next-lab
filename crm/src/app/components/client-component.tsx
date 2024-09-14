'use client'

import { ReactNode } from 'react'

export interface ClientComponentProps {
  children: ReactNode
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Client Component')

  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  )
}
