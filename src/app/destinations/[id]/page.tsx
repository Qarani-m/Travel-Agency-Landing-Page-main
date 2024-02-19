import NavBar from "@/components/common/NavBar";
import React from "react";

import "../../../css/details.css";

function page() {
  return (
    <div className="pl-56 pr-24">
      <NavBar />
      <div className="border border-red-500 border-solid w-full h-screen flex flex-row justify-between">
        <div className="border border-blue-500 border-solid w-2/3 h-16"></div>
        <div className="right-side  w-1/3  ml-10 flex justify-center items-center">
          <div className="price-card">
            <h5>Starting from</h5>
            <span>
              <h1>422,200</h1> <h6>12 days</h6>
            </span>
          </div>
          <div className="space"></div>
          <div className="trip-info">
            <div className="title">
              <h2>TRIP INFORMATION</h2>
            </div>
            <div>
              <ul>
                <li>Location: Kenya , Tanxania</li>
                <li>Days Count: 12</li>
                <li>Departure Date: 2022-01-01</li>
                <li>Return Date: 2022-01-01</li>
                <li>Free sight seeing and Hotel</li>
              </ul>
            </div>
          </div>
          <div className="space"></div>

<div className="other-packages">
  <div className="title">
    <h2>SIMILAR PACKAGES</h2>
  </div>
  <div className="contents">
    <div className="package">
    <img
      src="https://tour.epesicloud.com/app/storage/uploads/37/1669975991_13_file_(13).jpg"
      alt=""
    />
    <div className="h-2"></div>

    <h6 className="text-lg font-semibold">
      Maasai Mara Safari 3 Days / 2 Nights
    </h6>
    <div className="h-2 "></div>

    <p>
      Home to The Big Five, Mighty Masai Warriors And The Eight Wonder
      Of The World. This destination is a must see for every traveler.
      Prepare to be in awe...
    </p>
    <div className="h-4 "></div>

    <a href="/destinations/1">
      <button className="bg-orange-500 text-white font-semibold py-3 px-12 rounded-xl h-12">
        View Destination
      </button>
    </a>
    </div>
    <div className="h-4"></div>
    
    
  </div>
  
</div>
        </div>
      </div>
    </div>
  );
}

export default page;
