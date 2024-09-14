import { ReactNode } from 'react'

export interface ServerComponentProps {
  children: ReactNode
}

export default function ServerComponent({ children }: ServerComponentProps) {
  console.log('Server Component')

  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  )
}
