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
      if (location.href.includes("?")) {
        const url = location.href.split("?")[1].split("=")[1]
        console.log(url, `${process.env.NEXT_PUBLIC_BASE_URL}/users/reference?referee=${url}`);
        const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/reference?referee=${url}`)
        setLink(result.data.user_data.link)
        setReferer(result.data.parent_subscriber.name);
      }
      else {
        // return window.location.href = "/"
      }
    })()
  }, []);

  return (
    <div className="w-full h-screen px-7 flex justify-center items-center ">
      <div className="w-full  border-2 border-black rounded-lg h-[30rem] px-6 ">
        <div className="flex justify-center font-semibold text-xl ">
          <span className="my-5">Register</span>
        </div>

        <div>
          <div>
            <div></div>
            <div className="w-full justify-between">
              <div></div>

              <div className="mb-3">
                <span>Reference by : {referer}</span>
              </div>
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

            mobileerr && <span className="text-[#ff0000]">Mobile number already exist</span>
          }
          <input
            placeholder="Password"
            className="placeholder:text-black placeholder:font-semibold px-3  focus:outline-blue-400 rounded-md border-2 border-black w-full py-2 mt-5 "
            ref={passwordRef}
            onChange={(e) => {
              const password = e.target.value
              if (password.length < 5) {
                setPasswordErr(true)

              } else {

                setPasswordErr(false)

              }

            }}

          />

          {
            passworderr && <span className="text-[#ff0000]">password length is less than five </span>

          }


          <input
            placeholder="Confirm Password"
            className="placeholder:text-black placeholder:font-semibold px-3  focus:outline-blue-400 rounded-md border-2 border-black w-full py-2 mt-5 "
            ref={confirmRef}

            onChange={(e) => {
              const confirm_password = e.target.value

              if (confirm_password != passwordRef.current.value) {
                setConfPasswordErr(true)
              } else {
                setConfPasswordErr(false)

              }

            }}

          />
          {
            confpassworderr && <span className="text-[#ff0000]">Password doesn't match</span>

          }

<input
  ref={emailRef}
  placeholder="Email"
  type="text"
  className="placeholder:text-black placeholder:font-semibold px-3 focus:outline-blue-400 rounded-lg border-2 border-black w-full py-2 mt-5 "
  onChange={(event) => {
    console.log(event.target.value);
    const emailtext = event.target.value;

    (async function () {
      console.log('qwerty');
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/checkAvailability`, {
          email: emailtext
        });
        console.log(response);

        if (response.data.availability === "false") {
          setEmailErr(true);
        } else {
          setEmailErr(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }}
/>


          {
            emailerr&& 
          <span className="text-[#ff0000]">This email already exist</span>

          }

          <button
            className="font-semibold py-3 rounded-lg text-white bg-blue-400 w-full my-3"
            onClick={() => {
              const mobile_num = mobileRef.current.value;
              const password = passwordRef.current.value;
              const conf = confirmRef.current.value;
              const email = emailRef.current.value;

              if (password === conf) {
                (async () => {
                  const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/users/registration`,
                    {
                      mobile_number: mobile_num,

                      password,
                      email,
                      refference_id: link,
                    }
                  );
                  console.log(response)

                  if (response.data) {
                    location.href = '/login'
                  }
                })();
              }
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
