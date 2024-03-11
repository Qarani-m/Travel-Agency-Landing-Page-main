import React from 'react'
import NavBar from "@/components/common/NavBar";
import { FaClock } from "react-icons/fa";
import FooterSection from "@/components/sections/FooterSection";
function page() {
  return (
    <div className="pl-56 pr-56"
    style={{ height: "auto"}}>
        <NavBar/>

        <div>
        <CompleteBooking/>
        </div>

        <div style={{marginTop:"10vh"}}>
        <FooterSection/>
      </div>
      
    </div>
  )
}







const CompleteBooking = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent:"center",padding: '10px', backgroundColor: '#f5f5f5', flexDirection:"column" }}>
      <h2 style={{ margin: 0, color: '#333333', fontWeight: 'normal', fontSize:"2.5rem"}}>
        Complete <span style={{ color: '#ff9900' }}>Booking</span>
      </h2>
      <p style={{fontSize:"1.4rem", marginTop: "5vh", marginBottom: "5vh", marginLeft: '10px', color: '#333333', fontWeight: 'normal' }}>12 DAYS KENYA & TANZANIA COMBO MIDRANGE SAFARI</p>
    </div>
  );
};




export default page
