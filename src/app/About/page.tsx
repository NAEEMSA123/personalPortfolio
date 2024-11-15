"use client";

import Link from "next/link";


const About = () => {
  
  return (
    <div className="w-[100%] h-[100vh] bg-slate-900 text-white pt-[4rem] pl-[10rem] flex">
      <div className=" w-[430px] h-[450px] border-8 border-[#EAB308] rounded-md">
        <div className="w-[430px] h-[430px] bg-slate-300 rounded-md ml-3 ">
          <img
            className="w-[200px] h-[430px] bg-cover pt-[4rem] m-auto rounded-full"
            src="image.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div className="w-[1108px]  ">
        <div className="mt-[9rem] pl-[7rem]">
        <h1 className="w-[203px] h-[40px] font-bold text-2xl mt-[5rem]">About <span className="text-[#EAB308]">Me</span></h1>
        <p className="w-[460px] h-[40px] font-light text-xs opacity-50">
          There are many variations of passages ofLorem Ipsum available, but the
          majority havesuffered alteration in some form, by injected humour,
        </p>
        <h5 className="w-[500px] h-[54px] font-light text-xs opacity-50">
          Passages ofLorem Ipsumavailable, but the majority havesuffered
          alteration in some form, by injected humour, Contact us
        </h5>
        <button className='mt-4 bg-[#FACC15] px-3 py-2 rounded-sm text-xs text-black'>Contact us</button>
      </div>
      <Link href="/About"></Link>
      </div>
    </div>
  );
};

export default About;
