import Link from "next/link";
import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";

import { TbSpeakerphone } from "react-icons/tb";

const Service = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-slate-700 text-white">
      <div className="w-[430px] h-[50px] pt-[4rem] pl-[10rem]">
        <h1 className="text-4xl font-bold">My <span className="text-[#EAB308]">Service</span></h1>
        <p className="w-[460px] h-[80px] mt-5 text-xs opacity-50">
          There are many variations of passages ofLorem Ipsum available, but the
          majority havesuffered alteration in some form, by injected humour,
        </p>
      </div>
      <div className="flex gap-4 mt-[10rem] ml-[10rem] ">
      <div className="w-[350px] h-[340px] bg-[#020617] rounded-md">
      <TbSpeakerphone className="  m-auto mt-[3rem] text-[#EAB308]  size-10" />
      <h1  className="  text-center pt-5 text-2xl">Digital 
      Marketing</h1>
       <p className=" w-[320px] h-[108px] text-center pl-[3rem] text-xs pt-5 ">There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
       alteration in some </p>
      </div>
      <div  className="w-[350px] h-[340px] bg-[#020617] rounded-md">
      <MdDeveloperMode className="m-auto mt-[3rem] text-[#EAB308] size-10" />
      <h1 className="text-center pt-5 text-2xl">Web
      Devlopment</h1>
      <p className=" w-[320px] h-[108px] text-center pl-[3rem] text-xs pt-5 ">There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
      alteration in some </p>
      </div>
      <div  className="w-[350px] h-[340px] bg-[#020617] rounded-md ">
      <SiTaichigraphics className="m-auto mt-[3rem] text-[#EAB308] size-10" />
      <h1  className="text-center pt-5 text-2xl ">Creative
      Graphic Design</h1>
      <p className=" w-[320px] h-[108px] text-center pl-[3rem] text-xs pt-5 ">There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
      alteration in some </p>

      </div>
      </div>
      <Link href="/Service"></Link>
    </div>
    
  );
};

export default Service;
