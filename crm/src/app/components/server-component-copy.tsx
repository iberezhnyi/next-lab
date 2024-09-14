import { headers } from 'next/headers'
import { ReactNode } from 'react'

export interface ServerComponentCopyProps {
  children: ReactNode
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log('Server Component Copy')
  console.log('headers() :>> ', headers())
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  )
}
