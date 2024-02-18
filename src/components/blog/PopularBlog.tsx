import React from 'react'

import Link from "next/link";
import PopularTopicsSearchCard from './PopularTopicsSearchCard';

function PopularBlog() {
  return (
    <div><section className="text-gray-600 mt-12">
    <h2 className="text-3xl font-bold">Popular Blogs</h2>

    <div className="h-16 "></div>


        <div className="w-full  flex flex-wrap ml-20 ">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="card mx-8 mb-16">
              <PopularTopicsSearchCard />
              
            </div>
          ))}
        </div>


 
  </section>
  </div>
  )
}

export default PopularBlog