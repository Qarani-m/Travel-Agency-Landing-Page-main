import SingleBlogFull from "@/components/blog/SingleBlogFull";
import NavBar from "@/components/common/NavBar";
import React from "react";


function page() {
  return (
    <div className="px-64">
    <NavBar/>
    <main  className="mt-8 min-h-screen">
        <SingleBlogFull/>
    </main>

    </div>
  )
}

export default page