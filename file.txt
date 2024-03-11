import React from 'react'
import NavBar from "@/components/common/NavBar";
import { FaClock } from "react-icons/fa";
import FooterSection from "@/components/sections/FooterSection";
function page() {
  return (
    <div className="pl-56 pr-56"
    style={{ height: "auto"}}>
        <NavBar/>

        <div style={{marginTop:"10vh"}}>
        <FooterSection/>
      </div>
      
    </div>
  )
}

export default page
