"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "@/app/instance"


function Registration() {
  const [link, setLink] = useState("");
  const [referer, setReferer] = useState("");

  const [mobileerr, setMobileErr] = useState(false);

  const [passworderr, setPasswordErr] = useState(false);

  const [confpassworderr, setConfPasswordErr] = useState(false);


  const [emailerr, setEmailErr] = useState(false);


  const mobileRef = useRef("");

  const passwordRef = useRef("");

  const confirmRef = useRef("");

  const emailRef = useRef("");

  useEffect(() => {
    (async function () {
      
    })()
  }, []);

  return (
    <div className="w-full h-screen px-7 flex justify-center items-center ">
      <div className="w-full  border-2 border-black rounded-lg h-[30rem] px-6 ">
        <div className="flex justify-center font-semibold text-xl ">
          <span className="my-5">Reset Password</span>
        </div>

        <div>
          <div>
            <div></div>
            <div className="w-full justify-between">
              <div></div>

             </div>
          </div>
        </div>

        <div className="px-0">
          <input
            placeholder="Mobile Number"
            className="placeholder:text-black placeholder:font-semibold px-3 focus:outline-blue-400 rounded-md border-2 border-black w-full py-2  "
            ref={mobileRef}

            onChange={(e) => {
              const mobile_num = e.target.value

              if (mobile_num.length === 10) {
                (async function () {
                  try {
                    const response = await axios.post(
                      `${process.env.NEXT_PUBLIC_BASE_URL}/users/checkAvailability`, {
                      mobile_number: mobile_num

                    });
                    console.log(response);


                    if (response.data.availability === "false") {

                      setMobileErr(true);

                    } else {
                      setMobileErr(false);
                    }

                  } catch (error) {

                  }

                })()
              }

            }}
          />

          {

            mobileerr && <span className="text-[#2d8d52]">Mobile number available</span>
          }



<input
  ref={emailRef}
  placeholder="Email"
  type="text"
  className="placeholder:text-black placeholder:font-semibold px-3 focus:outline-blue-400 rounded-lg border-2 border-black w-full py-2 mt-5 "
 
/>



          <button
            className="font-semibold py-3 rounded-lg text-white bg-blue-400 w-full my-3"
            onClick={() => {
              const mobile_num = mobileRef.current.value;
            
              const email = emailRef.current.value;

              if (mobile_num.length === 10){
                (async () => {
                  const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/users/passwordresetrequest`,
                    {
                      mobile_number: mobile_num,

                      email,
                      
                    }
                  );
                  console.log(response)

                  if (response.data.status==="email_send") {
                    location.href = '/login'
                  }
                })();
              }
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
