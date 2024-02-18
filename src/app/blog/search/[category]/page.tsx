import Banner from "@/components/blog/Banner";
import PopularBlog from "@/components/blog/PopularBlog";
import PopularTopicsSearchCard from "@/components/blog/PopularTopicsSearchCard";
import NavBar from "@/components/common/NavBar";
import React from "react";

function page() {
  return (
    <>
      <div className="px-64">
        <NavBar />
        <div className="h-16 "></div>
        <Banner />
        <div className="h-16 "></div>

        <div className="w-full  flex flex-wrap ml-14">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="card mx-8 mb-16">
              <PopularTopicsSearchCard />
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
