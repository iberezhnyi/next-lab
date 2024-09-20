import { ReactNode } from 'react'
import Sidebar from '../components/sidebar'

export interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  console.log('Layout Rendering')
  return (
    <>
      <Sidebar></Sidebar>
      <div className="ml-60">{children}</div>
    </>
  )
}
