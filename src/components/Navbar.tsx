'use client'

import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-[100%] h-[62px] bg-slate-900 font-mono'>
       
      
        
        <div className='w-[1140px] h-[62px] flex  justify-evenly  '>
        <div className='w-[115px] '>
        <h1 className=' text-white py-4 text-2xl font-medium '>About<span className='text-[#EAB308]'>Me.</span></h1>
        </div>
            <ul className='flex items-center  text-white gap-6 uppercase text-center text-xs pl-[5rem] '>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Service">Service</Link></li>
                <li><Link href="/Portfolio">Portfolio</Link></li>
                <li><Link href="/Resume">Experience</Link></li>
                <li><Link href="/Blog">Blog</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
        </div>
        </div>
   
  )
}

export default Navbar