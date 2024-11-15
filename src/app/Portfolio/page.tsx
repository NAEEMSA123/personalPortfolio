import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-slate-900 text-white  ">
        <div className='w-[100%] h-[64px]'>
            <h1 className='text-center pt-10 text-4xl font-sans'>My<span className='text-[#EAB308]'> Portfolio</span></h1>
        </div>
        <div className='w-[100%] h-[80px] text-center'>
            <p className=' w-[460px]   ml-[33%] pt-10 text-xs'>There are many variations of passages ofLorem Ipsum
available, but the majority havesuffered alteration in some 
form, by injected humour,</p>
        </div>
        <div className='w-[400px] h-[400px] ml-[10rem] mt-[1rem] flex  gap-5 '>
            <img  src="Rectangle 1024.png" alt="" />
            
              <div className=' flex  gap-5  '>
              <div className='w-[190px] h-[190px] gap-5  ' >
              <img  src="Rectangle .png" alt="" />
              <img src="Rectangle 1.png" alt="" />
               
             
              
            </div>
            <div className='w-[190px] h-[190px]'>
            <img src="Rectangle 4 .png" alt="" />
            <img  src="Rectangle 4 .png" alt="" />
            </div>

              </div>
            </div>
           
        
      
        <Link href="/Portfolio"></Link>
    </div>
    
  )
}

export default Portfolio