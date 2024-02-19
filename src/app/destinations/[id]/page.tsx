import NavBar from "@/components/common/NavBar";
import React from "react";

function page() {
  return (
    <div className="pl-56 pr-24">
      <NavBar />
      <div className="border border-red-500 border-solid w-full h-full flex flex-row justify-between">
        <div className="border border-blue-500 border-solid w-2/3 h-16"></div>
        <div className="border border-green-500 border-solid w-1/3 h-16 ml-10"></div>
      </div>
    </div>
  );
}

export default page;
