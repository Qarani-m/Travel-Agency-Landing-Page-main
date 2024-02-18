import React from 'react'

function BlogCard() {
  return (
    <a className="block rounded w-full lg:flex mb-10"
    href="/blog/1"
  >
    <div className="rounded w-full lg:flex mb-10">
    <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww")' }} title="deit is very important">
    </div>
    <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
      <div>
        <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
          Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
        </div>
        <p className="text-gray-700 text-base">
          Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit.
        </p>
      </div>
      <div className="flex mt-3">
        <img src="https://w0.peakpx.com/wallpaper/353/890/HD-wallpaper-alita-artwork-2019-movie-the-alita-battle-angel-rosa-salazar-cyberpunk-thumbnail.jpg"
          className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
        <div>
          <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
          <p className="text-gray-600 text-xs"> 14 Aug </p>
        </div>
      </div>
    </div>
  </div>
  </a>
  )
}

export default BlogCard