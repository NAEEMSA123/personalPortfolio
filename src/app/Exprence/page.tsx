import React from 'react'
import Link from 'next/link';

const Exprence = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-slate-700 text-white '>
        <div className=' '>
          <div className=''>
            <h1 className='pt-[5rem] text-4xl font-bold ml-[9rem]'>My <span className="text-[#EAB308]" >Exprience</span></h1>
            <p className='w-[40%] ml-[9rem] pt-5 text-xs opacity-40' >There are many variations of passages ofLorem Ipsum
            available, but the majority havesuffered alteration in some form, by injected humour,</p>
          </div>
          
          <div className='flex gap-5 mt-[5rem] pl-[9rem] '>
           <div className='w-[366px] h-[303px] bg-[#020617] rounded-md'>
           <div className='p-10'>
           <p className='w-[167px] h-[27px] opacity-50'>December 2023-2024</p>
           <h1 className='text-[#EAB308] font-bold text-3xl'>UX/UI Designer</h1>
           <p className='text-xs pt-4'>Figma</p>
           <p className='text-xs pt-4 w-[250px] opacity-40'>There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered 
           alteration in some </p>
           </div>


           </div>
           <div className='w-[366px] h-[303px] bg-[#020617] rounded-md'>
            <div className='p-10'>
              <p  className='w-[167px] h-[27px] opacity-50'>December 2023-2024</p>
              <h1 className='text-[#EAB308] font-bold text-3xl'>Web Designer</h1>
              <p className='text-xs pt-4'>Adobe Photoshop</p>
              <p className='text-xs pt-4 w-[250px] opacity-40'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos id tempora perferendis sapiente esse cupiditate, nulla ex adipisci natus beatae?
              </p>
            </div>

           </div>
           <div className='w-[366px] h-[303px] bg-[#020617] rounded-md'>
            <div className='p-10'>
              <p  className='w-[167px] h-[27px] opacity-50'>December 2023-2024</p>
              <h1 className='text-[#EAB308] font-bold text-3xl'>Graphic Designer</h1>
              <p className='text-xs pt-4'>Adobe Photoshop</p>
              <p className='text-xs pt-4 w-[250px] opacity-40'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro architecto laborum mollitia sint quidem ea facere minus, expedita non fuga ducimus alias obcaecati recu</p>

            </div>

           </div>
          </div>
          </div>
          
                 
    </div> 
  )
}

export default Exprence;