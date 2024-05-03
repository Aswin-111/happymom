"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import antiage from "../../../public/antiaging.png";

import sls from "../../../public/sls.png";
import hop from "../../../public/forgiveness.png";

import fam from "../../../public/fam.png";

import { WhatsappShareButton } from "react-share";

import Image from "next/image";

import course from "../../../public/happymom.png";
function Courses() {
  const [link, setLink] = useState("");

  const router = useRouter();
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/walletDetails`
        );

        setLink(response.data.user_data.link);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
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

              <div className="flex justify-between items-center px-3 rounded-md" onClick={()=>{
                

                router.push("https://mwpfn.on-app.in/app/oc/457782/mwpfn?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
              }}>
                <Image src={course} height={125} width={150} />

                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">Happymom</span>

                  <span className="text-[1rem] font-semibold">600 RS</span>
                </div>
              </div>
            </div>

            <div className="w-full h-36 bg-blue-400 flex flex-col justify-center text-white text-xl mt-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md">
                <Image src={antiage} height={125} width={150} />

                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">Anti Aging</span>

                  <span className="text-[1rem] font-semibold">600 RS</span>
                </div>
              </div>
            </div>

            <div className="w-full h-36 bg-blue-400 flex flex-col justify-center text-white text-xl mt-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md">
                <Image src={sls} height={125} width={150} />
                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">SLS Mindful</span>

                  <span className="text-[1rem] font-semibold">600 RS</span>
                </div>
              </div>
            </div>

            <div className="w-full h-36 mb-10 bg-blue-400 flex flex-col justify-center text-white text-xl my-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md">
                <Image src={fam} height={125} />

                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">
                    Family Life Cycle
                  </span>

                  <span className="text-[1rem] font-semibold">600 RS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-16 bg-[#4F95FF] fixed z-10 bottom-0 flex justify-between items-center px-5">
        <button
          className="font-bold text-white text-sm"
          onClick={() => {
            router.push("/subscriber/home");
          }}
        >
          Home
        </button>
        <button
          className="font-bold text-white text-sm bg-emerald-300 px-2 py-2 rounded-md"
          onClick={() => {
            router.push("/courses");
          }}
        >
          Courses
        </button>
        <button
          className="font-bold text-white text-sm"
          onClick={() => {
            router.push("/wallet");
          }}
        >
          Wallet
        </button>

        <WhatsappShareButton
          url={`http://happymom.com.in/registration?referee=${link}`}
          title={`Hi i would like to invite you to join happymom. Please click the link below and register \n`}
        >
          <button className="font-bold text-sm text-white">Share</button>
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default Courses;
