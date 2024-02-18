import Blogs from "@/components/blog/Blogs";
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import React from "react";


function page() {
  return (
    <div className="px-64">
    <NavBar/>
    <main  className="mt-8 min-h-screen">
        <Blogs/>
    </main>
    <footer>
        <FooterSection/>
    </footer>
    </div>
  )
}

export default page