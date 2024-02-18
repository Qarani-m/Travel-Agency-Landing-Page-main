import React from 'react'

import Banner from "@/components/blog/Banner";
import PopularTopics from './PopularTopicsCard';
import BlogCard from './BlogCardHorizontal';
function Blogs() {
  return (
    <div>


<main className="mt-10">
<Banner/>


      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        {/* post cards */}
        <div className="w-full lg:w-2/3">
  {[...Array(4)].map((_, index) => (
    <div key={index} className="card">
     <BlogCard/>
    </div>
  ))}
</div>



        <PopularTopics/>


      </div>
    </main>
    </div>
  )
}

export default Blogs