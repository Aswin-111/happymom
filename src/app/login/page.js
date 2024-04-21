"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios"


import { useRouter } from "next/navigation";
function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  








  
  
  
  


  
  const [hookform,setHooks] = useState()
  const router = useRouter();
  useEffect(() => {
    // (async function (){
    //     if(location.href.includes("?")){
    //         const url = location.href.split("?")[1].split("=")[1]
    //         console.log(url,`${process.env.NEXT_PUBLIC_BASE_URL}/users/reference?referee=${url}`);
    //         const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/reference?referee=${url}`)
    //         setLink(result.data.user_data.link)
    //         setReferer(result.data.parent_subscriber.name);
    //     }
    //     else{
    //         return window.location.href = "/"
    //     }
    // })()
  }, []);

  return (
    <div className="w-full h-screen px-7 flex justify-center items-center">
      <div className="w-full  border-2 border-black rounded-lg h-96">
        <div className="flex justify-center font-semibold text-xl  ">
          <span className="my-5">Login</span>
        </div>

        <div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="px-6">
          <input
            placeholder="Mobile Number"
            className="py-3 px-3 my-5 focus:outline-blue-400 placeholder:text-black placeholder:font-semibold rounded-md border-2 border-black w-full"
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value);
            }}
          />

          <input
            placeholder="Password"
            className="py-3 px-3 focus:outline-blue-400 mb-5 placeholder:text-black placeholder:font-semibold rounded-md border-2 border-black w-full"
            onChange={(e) => {
              console.log(e.target.value);

              setPassword(e.target.value);
            }}
          />

          <button
            className="py-3 font-semibold rounded-md text-white bg-blue-400 w-full"
            onClick={() => {
              (async () => {
                console.log(username);
                console.log(password);

                const response = await axios.post(
                  `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
                  {
                    username,

                    password,
                  }
                );
                console.log(response.data);
                if (response.data.status) {
                  
                  sessionStorage.setItem("token", response.data.token);
                   
                 
                  return router.push("/subscriber/home");
                }
              })();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
