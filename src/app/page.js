import Image from "next/image";

export default function Home() {
  return (
   <div>
    {/* navbar */}


    <div className="w-full flex justify-between px-5 mt-5">
      
     

      <ul className="hidden w-[16vw] flex justify-between">
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </div>
   </div>
  );
}
