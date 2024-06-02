"use client";
import React, { useEffect, useState } from "react";
import { WhatsappShareButton } from "react-share"
import { useRouter } from "next/navigation";
function BottomNavbar() {
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
   <>
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
          url={`https://happymom.com.in/registration?referee=${link}`}
          title={`Hi i would like to invite you to join happymom. Please click the link below and register \n`}
        >
          <button className="font-bold text-sm text-white">Share</button>
        </WhatsappShareButton>
   </>
  )
}

export default BottomNavbar