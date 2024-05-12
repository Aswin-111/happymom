"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "@/app/instance";
import { useRouter } from "next/navigation";
import { WhatsappShareButton } from "react-share";

function Wallet() {
  const [wallet, setWallet] = useState([]);
  const [userwallet, setUserWallet] = useState({});

  const [link, setLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/walletDetails`
        );

        // console.log(response.data);
        console.log(response.data);

        setWallet(response.data.my_wallet_data);
        setUserWallet(response.data.subscriber_data);

        setLink(response.data.user_data.link);
        // console.log(wallet);
        // let linkfromjs = JSON.parse(JSON.stringify(response.data.user_data.link));
        // setLink(linkfromjs);
        // console.log([...response.data.subordinate_data], "results");
        // setUsersData({ ...results });
        // setSubordinateData([...response.data.subordinate_data]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="max-w-[100%] overflow-hidden">
      <div>
        <div className="w-full px-5 fixed  flex justify-between items-center pt-5">
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
            <div className="drawer-side z-100">
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

      <div>
        <div className="flex justify-center ">
          <div className="w-[90vw] sm:w-[90vw] fixed top-24 bg-[#1EA1DA] h-[11rem] px-5 rounded-lg">
            <div className="flex flex-col">
              <div className="mt-5 text-xl text-white font-semibold">
                {Number(userwallet.wallet_balance).toFixed(2)} Rupees
              </div>

              <div className="text-white">Total Balance</div>
              <div className="mt-5 text-xl text-white font-semibold">
                {Number(userwallet.wallet_balance).toFixed(2)} Rupees
              </div>

              <div className="text-white">Redeemable</div>
            </div>
          </div>
        </div>

        <div className="fixed flex flex-col max-w-full min-w-full  max-h-[16rem]  overflow-y-scroll  top-72 ">
          <div className="overflow-x-hidden  sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="">
                <table className="min-w-full text-center  text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
                    <tr>
                      <th scope="col" className=" px-5 py-4 text-[0.7rem]">
                        Subscriber
                      </th>
                      <th scope="col" className=" px-5 py-4 text-[0.7rem]">
                        Date
                      </th>
                      <th scope="col" className=" px-5 py-4 text-[0.7rem]">
                        Amount
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {wallet.map((i, ind) => {
                      return (
                        <tr className="w-full h-11  " key={ind}>
                          <td className="text-[0.6rem] text-black">
                            {i.description}
                          </td>
                          <td className="text-[0.6rem] text-black">
                            {i.createdAt.split("T")[0]}
                          </td>
                          <td className="text-[0.6rem] text-black">
                            {i.credit}
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
          className="font-bold text-white text-sm"
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
          className="font-bold text-white text-sm bg-emerald-300 px-2 py-2 rounded-md"
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

export default Wallet;
