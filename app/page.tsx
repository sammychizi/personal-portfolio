import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import WorkInProgress from './components/WorkInProgress'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
<WorkInProgress />
<h1 className="text-red-700"> Almost done</h1>
    </div>
    
  )
}
