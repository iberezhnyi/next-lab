import { ReactNode } from 'react'
import styles from './not-active-label.module.css'

interface NotActiveLabelProps {
  children: ReactNode
}

console.log('styles :>> ', styles)

export default function NotActiveLabel({ children }: NotActiveLabelProps) {
  console.log('styles :>> ', styles)

  return <span className={styles.label}>{children}</span>
}
