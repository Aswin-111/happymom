"use client";

import axios from "@/app/instance";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";

function page() {
  const [profile, setProfile] = useState({});

  const router = useRouter();

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [housename, setHouseName] = useState("");

  const [street, setStreet] = useState("");
  const [letter, setLetter] = useState("");

  const [pin, setPin] = useState("");

  const [district, setDistrict] = useState("");

  const [state, setState] = useState("");

  const [country, setCountry] = useState("");

  const [account_num, setAccountNum] = useState("");

  const [bank_name, setBankName] = useState("");

  const [account_holder_name, setAccountHolderName] = useState("");
  const [toggle, setToggle] = useState(false);

  const [ifsc, setIfsc] = useState("");
  useEffect(() => {
    console.log("profile");

    (async function () {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/profile`
      );
      console.log(response);
      setProfile(response.data.my_data);
    })();
  }, []);
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
        {/* popup */}
        <div className="w-full h-[100vh] bg-slate-50 filter z-50 absolute top-0 flex justify-center items-center px-5">
          <div className="w-full h-[30vh] bg-slate-400  shadow">
            <div className="w-full bg-indigo-500 py-5 shadow flex justify-center items-center font-semibold text-white">
              Confirm Updating
            </div>
            
            <div className="w-full  flex px-7 justify-between items-center mt-[3rem]">
              
              <button className="px-5 py-4 bg-red-500 text-white font-semibold rounded-md">Cancel</button>
              <button className="px-5 py-4 bg-indigo-500 text-white font-semibold rounded-md">Update</button>
            </div>
          </div>
        </div>
        {/* popup */}
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
        <button
          className="px-5 py-1 bg-slate-500 rounded-md text-white "
          onClick={() => {
            router.push("/subscriber/home");
          }}
        >
          Home
        </button>
        <div></div>
      </div>
      <div className=" px-5 max-h-[65vh] overflow-y-scroll overflow-x-hidden">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="w-full font-semibold mt-3 text-black"
          defaultValue={`${profile.name && profile.name}`}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="DOB"
          variant="outlined"
          className="w-full font-semibold mt-5  text-black"
          defaultValue={`${profile.name && profile.dob}`}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="Aadhar"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.adhaar_num && profile.adhaar_num}`}
          onChange={(e) => {
            setAadhar(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="PAN"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.pan_num && profile.pan_num}`}
          onChange={(e) => {
            setPan(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="House Name"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.house_name && profile.house_name}`}
          onChange={(e) => {
            setHouseName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Street"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.street && profile.street}`}
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="P.O"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.po && profile.po}`}
          onChange={(e) => {
            setLetter(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="PIN"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.pin && profile.pin}`}
          onChange={(e) => {
            setPin(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="District"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.district && profile.district}`}
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="State"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.state && profile.state}`}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="Country"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.country && profile.country}`}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="Bank Name"
          variant="outlined"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${profile.bank_name && profile.bank_name}`}
          onChange={(e) => {
            setBankName(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="Account Number"
          variant="outlined"
          className="w-full font-semibold text-black mt-5"
          defaultValue={`${profile.account_num && profile.account_num}`}
          onChange={(e) => {
            setAccountNum(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Account Holder"
          variant="outlined"
          className="mt-5 w-full font-semibold text-black"
          defaultValue={`${
            profile.account_holder_name && profile.account_holder_name
          }`}
          onChange={(e) => {
            setAccountHolderName(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="IFSC Code"
          variant="outlined"
          className="w-full  mt-5 font-semibold text-black"
          defaultValue={`${profile.ifsc_code && profile.ifsc_code}`}
          onChange={(e) => {
            setIfsc(e.target.value);
          }}
        />
      </div>
      <div className="w-full px-5 mt-3">
        <button className="py-2 w-full          bg-[#4E95FF] font-semibold text-white rounded-md">
          Update
        </button>
      </div>
    </div>
  );
}

export default page;
