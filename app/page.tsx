import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import WorkInProgress from './components/WorkInProgress'
import Link from 'next/link'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-center ">
        <div className=" h-24 w-full text-center text-4xl font-thin flex items-center justify-center">
          <span>
            {" "}
            Hi! I'm David &mdash; a{" "}
            <span className="text-teal-400 font-normal">developer</span> &{" "}
            <span className="text-teal-400 font-normal">engineering</span>{" "}
            student at UNZA
          </span>
        </div>
      </div>
    </div>
    
  )
}
