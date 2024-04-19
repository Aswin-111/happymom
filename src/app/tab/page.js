"use client";


import React, { useEffect, useState } from "react";

function page() {
    
      


    
  return (
    <div class="flex flex-col ">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table
            class="min-w-full text-center text-sm font-light text-surface dark:text-white">
            <thead
              class="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
              <tr>
            
                <th scope="col" class=" px-6 py-4">Name</th>
                <th scope="col" class=" px-6 py-4">Role</th>
                <th scope="col" class=" px-6 py-4">Subscribers</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-200 dark:border-white/10 bg-[#5985C6]">
              
                <td class="whitespace-nowrap  px-6 py-4">Romario </td>
                <td class="whitespace-nowrap  px-6 py-4">Manager</td>


                <td class="whitespace-nowrap  px-6 py-4">10000</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default page;
