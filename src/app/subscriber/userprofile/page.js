"use client"


import axios from "@/app/instance"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { WhatsappShareButton} from "react-share"

function page() {

  const [link, setLink] = useState("");





  useEffect(()=>{
    console.log('profile');
  },[])


  return (
    <div className="w-full max-h-screen h-screen overflow-y-scroll">
    <div className="  ">
    <div className="w-full px-5 absolute bg-white  flex justify-between items-center pt-5">
      <div className="text-xl font-bold">Happymom</div>
      <div className="drawer drawer-end w-[2rem]">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[2rem]">
          <label htmlFor="my-drawer-4" className="flex flex-col">
            <div className="w-[2.3rem] h-[0.3rem] bg-black rounded-md"></div>
            <div className="w-[2.3rem] h-[0.3rem] bg-black rounded-md mt-2"></div>
            <div className="w-[2.3rem] h-[0.3rem] bg-black rounded-md mt-2"></div>
          </label>
        </div>
        <div className="drawer-side z-50 ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li className="">
              <a>My Courses</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
  </div>
  
  

  <h1>sdfg</h1>


  
  </div>
  )
}

export default page