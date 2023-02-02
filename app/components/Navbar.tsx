import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-full bg-white flex justify-between items-center fixed top-0 z-10 h-16'>
        <div className='text-teal-600 text-4xl ml-10 font-bold cursor-pointer font-mono'><Link href="/food" >DJ</Link></div>
        <div>
        <Link href="/" ><span className='text-teal-400 text-2xl ml-10 cursor-pointer font-mono font-thin hover:text-teal-600'>home</span></Link>
        <Link href="/" className='text-slate-400 text-2xl ml-10 cursor-pointer font-mono font-extralight hover:text-teal-600'>about</Link>
        <Link href="/food" className='text-slate-400 text-2xl ml-10 cursor-pointer font-mono font-extralight mr-10 hover:text-teal-600' >food</Link>
        </div>
        
    </div>
  )
}

export default Navbar