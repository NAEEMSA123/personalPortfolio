import React from 'react'

const Contact = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#020617] text-white  '>
        <div className=' text-center pt-[5rem] '>
            <div className=' '>
                <h1 className='text-3xl font-bold'>Contact <span className='text-[#EAB308]'>Me</span></h1>
                <p className='pt-5 text-xs w-[400px] h-[54px] ml-[30rem] opacity-40 ' >There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour,</p>
            </div>

        </div>
        <div className='flex  p-[5rem] ml-[3rem] '>
            <div >
                <p className='text-xs '><span className='text-[#EAB308]'>Address _ </span>Safoora goth Scheem 33 karachi <br /> <br/>
                Pakistan</p>
                <h1 className='text-xs mt-2'><span className='text-[#EAB308]'>Phone _</span> 03320271694</h1>
                <h2 className='text-xs mt-2'><span className='text-[#EAB308]'>E mail _</span> abc.xyz@gmail.com</h2>
                <h3 className='text-xs mt-2'><span className='text-[#EAB308]'>Website _</span> www.abc.xyz.com</h3>
            </div>
            <div>
                <div className='ml-[20rem] '>
                 <input className='bg-slate-500 w-[350px] h-[50px] text-xs pl-2' type="text" placeholder='Name'/>
                 
                </div>
                <div className='pt-5 ml-[20rem] '>
                <textarea className='w-[400px] h-[100px] bg-slate-500 text-x pl-2' name="message" id="message" placeholder='Message'></textarea>
                </div>
               <div className='w-[100px] bg-[#EAB308] text-center p-2 rounded-md ml-[20rem] mt-3'>
               <button className='text-center text-black text-xs'>Contact us</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;