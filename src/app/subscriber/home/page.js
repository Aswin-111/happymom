"use client";

import axios from "@/app/instance"

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import chip from "../../../../public/chip.png";
import Image from "next/image";
import { WhatsappShareButton } from "react-share"
function page() {
  const [users_data, setUsersData] = useState({});
  const [subordinate_data, setSubordinateData] = useState([]);
  const [link, setLink] = useState("");
  const [popup, setPopup] = useState(true)
  const router = useRouter()
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/home`);

        console.log(response.data);
        // console.log(response.data.subordinate_data)
        let results = JSON.parse(JSON.stringify(response.data.subscriber_data));
        let linkfromjs = JSON.parse(JSON.stringify(response.data.user_data.link));
        setLink(linkfromjs);
        console.log([...response.data.subordinate_data], "results");
        setUsersData({ ...results });
        setSubordinateData([...response.data.subordinate_data]);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, []);
  return (
    <div className="w-full max-h-screen h-screen overflow-y-scroll">
      {/* navbar */}
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
                  <a href="/subscriber/userprofile">Profile</a>
                </li>
                <li>
                  <a onClick={() => {

                    sessionStorage.removeItem("sls_token");
                    router.push('/')

                  }}> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 ">
        <div className="w-full flex justify-around items-center mt-[5rem]">
          <div className="w-full  flex flex-col justify-center h-[30vh] bg-[#3C3C3C] rounded-md px-5">
            <h2 className="mt-3 text-[#C6C6C6] font-semibold  drop-shadow-2xl ">
              Happymom
            </h2>
            <div className="mt-5">
              <Image src={chip} className="w-10 h-10" alt="logo" />

              <h4 className="text-[#C6C6C6] font-semibold ">
                {users_data.subscriber_id}
              </h4>
            </div>

            <div className="flex  h-10 justify-between items-center">
              <h4 className=" text-[#C6C6C6] font-semibold textshadow">
                {users_data.name}
              </h4>

              <div className="flex flex-col  items-center text-[#C6C6C6] text-sm font-semibold ">
                <h6 className="textshadow">Valid Till</h6>
                <h6 className="textshadow">31-05-2024</h6>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col overflow-y-scroll">
          <div className="overflow-x-hidden max-h-[45vh]">
            <div className="inline-block min-w-full py-2">
              <div className="">
                <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800 py-0 sticky top-0 z-10">
                    <tr>
                      <th scope="col" className="">
                        Name
                      </th>
                      <th scope="col" className="">
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {subordinate_data.map((i, ind) => {
                      return (
                        <tr key={ind} className=" rounded-xl px-6 py-6 mt-5 ">
                          <td className="whitespace-nowrap text-[0.7rem] max-w-[50vw] flex justify-center items-center font-semibold text-black ">
                            {i.name}
                          </td>
                          <td className="whitespace-nowrap text-[0.7rem]  font-semibold text-black">
                            Manager
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full h-16 bg-[#4F95FF] fixed z-10 bottom-0 flex justify-between items-center px-5">
        <button
          className="font-bold text-white text-sm bg-emerald-300 px-2 py-2 rounded-md"
          onClick={() => {
            router.push("/subscriber/home");
          }}
        >
          Home


        </button>
        <button
          className="font-bold text-white text-sm"
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

        <WhatsappShareButton  url={`http://happymom.com.in/registration?referee=${link}`} title={`Hi i would like to invite you to join happymom. Please click the link below and register \n`} >
          <span className="font-bold text-sm text-white" >Share</span>
        </WhatsappShareButton>

      </div>
    </div>
  );
}

export default page;
