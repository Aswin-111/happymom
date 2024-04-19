




"use client"
import React from "react";


import { useRouter } from "next/navigation";
import infant from '../../../public/in.png'
import toddler from '../../../public/toddler.png'
import preschool from '../../../public/preschool.png'
import teenagers from '../../../public/teenagers.png'

import gp from '../../../public/gp.png'

import Image from 'next/image'





function Courses() {
  const router = useRouter()
  return (
    <div>
      <div className="w-full flex justify-center bg-white">
        <span className="text-xl font-semibold my-5 fixed "> Courses</span>
      </div>

      <div className="w-full px-5 mt-16 ">
        <div>
          <div className="max-h-80vh">
            <div className="w-full h-36 bg-blue-400 flex flex-col justify-center text-white text-xl rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md">
                <div className="w-16 h-16 bg-emerald-300 rounded-md"></div>

                <div className="flex flex-col items-center ">
                  <span className="text-2xl font-semibold">Infants</span>

                  <span className="text-md font-semibold">0 - 2 Years</span>
                </div>
              </div>
            </div>



            <div className="w-full h-36 bg-blue-400 flex flex-col justify-center text-white text-xl mt-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md">
                <div className="w-16 h-16 bg-emerald-300 rounded-md"></div>

                <div className="flex flex-col items-center ">
                  <span className="text-2xl font-semibold">Infants</span>

                  <span className="text-md font-semibold">0 - 2 Years</span>
                </div>
              </div>
            </div>

            <div className="w-full h-36 bg-blue-400 flex flex-col justify-center text-white text-xl mt-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md">
                
                <Image src = {preschool} 

 height = {125}
                />
                <div className="flex flex-col items-center ">
                  <span className="text-2xl font-semibold">Pre School</span>

                  <span className="text-md font-semibold">3 - 6 Years</span>
                </div>
              </div>
            </div>


          
                   


            <div className="w-full h-36 mb-10 bg-blue-400 flex flex-col justify-center text-white text-xl my-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md">
             
              <Image src = {teenagers} 

height = {90}
               />

                <div className="flex flex-col items-center ">
                  <span className="text-2xl font-semibold">Teenagers</span>

                  <span className="text-md font-semibold">13 - 19 Years</span>
                </div>
              </div>
            </div>



           
          </div>
        </div>
      </div>
      

     
      <div className="w-full h-16  bg-[#4F95FF] fixed z-10 bottom-0 flex justify-between items-center px-5">
      <h5 className="font-bold text-white text-sm" onClick={()=>{
        router.push('/subscriber/home')
      }}>Home</h5>
      <h5 className="font-bold text-white text-sm px-2 py-2 bg-emerald-300 rounded-md" onClick={()=>{
        router.push('/courses')
      }}>Courses</h5>
    

    <span>
      <h5 className="font-bold text-white text-sm" onClick={()=>{
        router.push('/wallet')
      }}>Wallet</h5>
      </span>
      <h5 className="font-bold text-white text-sm" onClick={()=>{
         if (navigator.share) {
          navigator.share({
                  title: 'Sls',
                  text: 'Please register',
                  
                  url: `http://localhost:3000/registration?referee=${link}`
              })
              .then(() => {
                  console.log('Sharing was successful');
              })
              .catch((error) => {
                  console.error('Sharing failed:', error);
              });
      } else {
          console.error('Web Share API not supported');
      }
      }}>Share</h5>
      




      </div>

    </div>
  );
}

export default Courses;
