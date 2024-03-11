"use client";

import NavBar from "@/components/common/NavBar";
import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import FooterSection from "@/components/sections/FooterSection";
import "../../../css/details.css";

function page() {
  const packageDetailsStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    width: "100%",
  };

  const sectionStyle = {
    flexBasis: "48%",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    color: "#333",
    marginTop: "0",
  };

  const listStyle = {
    listStyleType: "dots",
    padding: "0",
    margin: "0",
  };

  const listItemStyle = {
    marginBottom: "10px",
    lineHeight: "1.4",
  };

  return (
    <div
      className="pl-56 pr-24"
      style={{ height: "auto"}}
    >
      <NavBar />
      <div className="w-full  flex flex-row justify-between">
        <div className="  w-2/3 ">
          <p
            style={{ fontSize: "2rem", marginTop: "2vh", marginBottom: "1vh" }}
          >
            12 DAYS KENYA & TANZANIA COMBO MIDRANGE SAFARI
          </p>

          <div
            style={{
              height: "60vh",
              width: "100%",
            }}
          >
            <ProductPage />{" "}
          </div>

          <div
            style={{
              // backgroundColor:"red",
              marginTop: "3vh",
            }}
          >
            <p
              style={{
                marginTop: "2vh",
                fontSize: "1.7rem",
                fontWeight: "700",
              }}
            >
              About The Tour
            </p>

            <hr />

            <PackageDetails />
            <hr />

            <p
              style={{
                marginTop: "2vh",
                fontSize: "1.7rem",
                fontWeight: "700",
              }}
            >
              Rates
            </p>

            <hr />
            <AvailableRates />

            <p style={{ marginTop: "5vh",                fontSize: "1.7rem",
                fontWeight: "700", }}>Detailed Day Wise Itinerary</p>

            <div style={{ marginTop: "3vh" }}>

              <DayOneArrival />
              <DayOneArrival />
              <DayOneArrival />
            </div>
          </div>
        </div>

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
                  Home to The Big Five, Mighty Masai Warriors And The Eight
                  Wonder Of The World. This destination is a must see for every
                  traveler. Prepare to be in awe...
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
      <div style={{marginTop:"10vh"}}>
        <FooterSection/>
      </div>
    </div>
  );
}

const ProductPage: React.FC = () => {
  const [images, setImages] = useState({
    img1: "https://tour.epesicloud.com/app/storage/uploads/37/1669975907_69_file_(6).jpg",
    img2: "https://tour.epesicloud.com/app/storage/uploads/37/1669976050_41_serenity-on-the-lake-magu-1608625709.jpg",
    img3: "https://tour.epesicloud.com/app/storage/uploads/37/1669975854_79_101735_v6.jpeg",
    img4: "https://tour.epesicloud.com/app/storage/uploads/37/1669975883_1_file_(5).jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col gap-6   w-full h-full">
      <img
        src={activeImg}
        alt=""
        className="w-full aspect-square object-cover rounded-xl"
        style={{ height: "45vh" }}
      />
      <div className="flex flex-row justify-between h-24">
        <img
          src={images.img1}
          alt=""
          className="w-64 h-24 rounded-md cursor-pointer"
          onClick={() => setActiveImage(images.img1)}
        />
        <img
          src={images.img2}
          alt=""
          className="w-64 h-24 rounded-md cursor-pointer"
          onClick={() => setActiveImage(images.img2)}
        />
        <img
          src={images.img3}
          alt=""
          className="w-64 h-24 rounded-md cursor-pointer"
          onClick={() => setActiveImage(images.img3)}
        />
        <img
          src={images.img4}
          alt=""
          className="w-64 h-24 rounded-md cursor-pointer"
          onClick={() => setActiveImage(images.img4)}
        />
      </div>
    </div>
  );
};

const PackageDetails: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <div style={{ flex: "0 0 48%", padding: "20px", borderRadius: "5px" }}>
        <h3
          style={{
            color: "#333",
            marginTop: "0",
            fontWeight: "600",
            marginBottom: "0.5vh",
          }}
        >
          Inclusions
        </h3>
        <ul style={{ listStyleType: "disc", padding: "0", margin: "0" }}>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Ngorongoro Crater Tour
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Soft drinks, local beers and selected house wines at Emayian Luxury
            Camp
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Government statutory taxes
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Unlimited mileage on game viewing drives
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Transport in a custom-designed 4x4 Safari Land Cruiser
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Services of a professional English-speaking guide driver
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Full board accommodation while on safari (breakfast, lunch and
            dinner)
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Bed and breakfast accommodation in Nairobi
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Soft and alcoholic drinks
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Park entrance fees
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "0 0 48%",
          alignItems: "center",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h3
          style={{
            color: "#333",
            marginTop: "0",
            fontWeight: "600",
            marginBottom: "2vh",
          }}
        >
          Exclusions
        </h3>
        <ul style={{ listStyleType: "disc", padding: "0", margin: "0" }}>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Any item not mentioned as included in the safari package
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Travel insurance
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Soft and alcoholic drinks
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.4" }}>
            Additional sight-seeing or deviation from the safari itinerary
          </li>
        </ul>
      </div>
    </div>
  );
};

const AvailableRates: React.FC = () => {
  const data = [
    {
      no: 1,
      validUntil: "2023-02-28",
      twoPax: 723400.0,
      threePax: 664600.0,
      fourPax: 594300.0,
      fivePax: 696000.0,
      sixPax: 751100.0,
      srsCost: 661600.0,
    },
    {
      no: 2,
      validUntil: "2023-03-31",
      twoPax: 723400.0,
      threePax: 664600.0,
      fourPax: 594300.0,
      fivePax: 696000.0,
      sixPax: 751100.0,
      srsCost: 661600.0,
    },
    {
      no: 3,
      validUntil: "2023-05-31",
      twoPax: 723400.0,
      threePax: 664600.0,
      fourPax: 594300.0,
      fivePax: 696000.0,
      sixPax: 751100.0,
      srsCost: 661600.0,
    },
    {
      no: 4,
      validUntil: "2023-06-30",
      twoPax: 723400.0,
      threePax: 664600.0,
      fourPax: 594300.0,
      fivePax: 696000.0,
      sixPax: 751100.0,
      srsCost: 661600.0,
    },
    {
      no: 5,
      validUntil: "2023-10-31",
      twoPax: 723400.0,
      threePax: 664600.0,
      fourPax: 594300.0,
      fivePax: 696000.0,
      sixPax: 751100.0,
      srsCost: 661600.0,
    },
    {
      no: 6,
      validUntil: "2023-12-21",
      twoPax: 723400.0,
      threePax: 664600.0,
      fourPax: 594300.0,
      fivePax: 696000.0,
      sixPax: 751100.0,
      srsCost: 661600.0,
    },
  ];

  return (
    <div>
      <h2
        style={{ backgroundColor: "#253d52", color: "white", padding: "10px" }}
      >
        Available Rates
      </h2>
      <table
        style={{ borderCollapse: "collapse", width: "100%", marginTop: "1vh" }}
      >
        <thead>
          <tr style={{ color: "white" }}>
            <th style={{ padding: "10px" }}>No</th>
            <th style={{ padding: "10px" }}>Valid Until</th>
            <th style={{ padding: "10px" }}>Two Pax</th>
            <th style={{ padding: "10px" }}>Three Pax</th>
            <th style={{ padding: "10px" }}>Four Pax</th>
            <th style={{ padding: "10px" }}>Five Pax</th>
            <th style={{ padding: "10px" }}>Six Pax</th>
            <th style={{ padding: "10px" }}>SRS Cost</th>
            <th style={{ padding: "10px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white" }}
            >
              <td style={{ padding: "10px", textAlign: "center" }}>{row.no}</td>
              <td style={{ padding: "10px" }}>{row.validUntil}</td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {row.twoPax.toLocaleString()}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {row.threePax.toLocaleString()}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {row.fourPax.toLocaleString()}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {row.fivePax.toLocaleString()}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {row.sixPax.toLocaleString()}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {row.srsCost.toLocaleString()}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <button
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  BOOK PACKAGE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DayOneArrival = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "3vh",
      }}
    >
      <div
        style={{
          width: "5vh",
          height: "5vh",
          marginRight:"1vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <FaClock style={{color:"#e91e63",}}/>
      </div>
      <div>
        <h3 style={{ color: "#e91e63", marginTop: 0 }}>
          Day 01 Arrival Nairobi
        </h3>
        <p style={{ lineHeight: "1.5" }}>
          Approximately 18kms, takes approximately 1 hours drive depending on
          traffic Bonfire Adventures guide driver will warmly meet you on
          arrival at the Jomo Kenyatta International Airport, transfer you to
          the Nairobi Serena Hotel. Check-In then brief you on your safari,
          which we hope will be your Best Holiday In Africa.
        </p>
        <p style={{ lineHeight: "1.5" }}>
          Enjoy overnight. You are booked on Bed & Breakfast
        </p>
      </div>
    </div>
  );
};

export default page;
