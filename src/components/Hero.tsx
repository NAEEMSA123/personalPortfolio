import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-slate-500 h-[100vh] flex '>
        <div className=' pl-[13%] mt-[13%] '>
            <p className='text-xs'><span className='text-[#EAB308] font-normal '>Hello, Welcome</span></p>
            <div>
                <h1 className='text-4xl mt-3 font-bold text-white font-sans'>I am <span className='text-black'>Naeem Ahmed</span></h1>
                <p className='text-xs w-[400px] h-[41px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum accusantium deserunt doloremque expedita necessitatibus sapiente et iusto, unde ipsa aspernatur?</p>
                <button className='mt-8 bg-[#FACC15] px-3 py-2 rounded-sm text-xs '>Contact us</button>
             
            </div>
            </div>
            <div className='float-right w-[400px] h-[400px] bg-slate-300 mt-[4rem] ml-[10rem] rounded-md  '>
              <img className='w-[200px] h-[400px] bg-cover m-auto ' src="profile.jpg" alt=""  />
          </div>
            
       
    </div>
  )
}
 
export default Hero