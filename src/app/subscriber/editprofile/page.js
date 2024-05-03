"use client"


import axios from "@/app/instance"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


function page() {



  const [profile,setProfile] = useState({})
  

  const router = useRouter()
  useEffect(()=>{
    console.log('profile');

    (async function () {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/profile`)
      console.log(response)
      setProfile(response.data.my_data)
    })()
  },[])
  // account_holder_name
  // account_num
 
  // active
 
  // adhaar_num
 
  // bank_name
  
  // country
 
  // createdAt

  // district
 
  // dob
 
  // doj

  // house_name
  
  // ifsc_code

  // name

  // pan_num

  // parent_id

  // pin
 
  // place
 

  // position_id


  // subscriber_id
 
 
  // null
  // updatedAt
 
  // wallet_balance


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
  
  


  <div className="mb-5 mt-[23vw] w-full flex justify-between px-5">
    <button className="px-5 py-1 bg-slate-500 rounded-md text-white ">Home</button>
    <button className="px-5 py-1 bg-slate-500 rounded-md text-white " onClick = {()=>router.push('/subscriber/editprofile')}>Edit</button>
  </div>
<div className = " px-5 max-h-[65vh] overflow-y-scroll overflow-x-hidden">
  
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>

<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>


<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>



<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>


<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>



<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>
<input className = "h-[10vh] w-full border-2 border-[#2AA2E6] mt-5 rounded-md px-3 flex justify-between items-center shadow-lg" placeholder="Name"/>

</div>
<div className="w-full px-3 ">
<button className="py-3 w-full          bg-[#4E95FF] font-semibold text-white rounded-md">Update</button>
</div>
  </div>
  )
}

export default page