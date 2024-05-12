'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  
  const router = useRouter()
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    
    
    if(token){
      


      router.push('/subscriber/home')
    }

  }
  ,[])
  return (
    <div>
      <div className="py-6 px-3 flex justify-between items-center">
        <h1>Happymom</h1>

        <div className="flex flex-col h-6 justify-between">
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>
      </div>
      <div className="w-full h-[40vh] bg-[#FFA39C] flex flex-col justify-center items-center">
        <h1>Make Your Parenting A Success</h1>
        <div className="w-[40vw] h-[16vh] bg-[#249EFF]"></div>
      </div>

      <div>
        <div className="w-full flex justify-center mt-5">Categories</div>

        <div className="flex flex-col px-10 ">
          

          
          
          

          
          <div>
          <div className="w-full h-[46vh] bg-[#64FFD1] rounded-md mt-5"></div>

<span>0 - 12 years</span>
          </div>
          <div className="w-full h-[46vh] bg-[#53FF98] rounded-md mt-10"></div>
          <div className="w-full h-[46vh] bg-[#63FFFF] rounded-md mt-10"></div>
        </div>
      </div>
    </div>
  );
}
