import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import DestinationCard from "../cards/DestinationCard";
import {IoLocationOutline} from 'react-icons/io5'
const Places = () => {


        const destinations = [
          {
            id: 0,
            imageUrl: "/images/rome.png",
            title: "Rome, Italy",
            amount: "$5.42k",
            duration: "10 Days Trip",
            highlighted: false,
          },
        ];



  return (
    <div className='py-10'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Popular Places</h1>
            <button className='px-5 py-2 rounded border border-orange-500 text-orange-600'>View All</button>
        </div>
        
        <div className="places py-10 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
            





            <section>

      <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-16 w-full">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            duration={destination.duration}
            amount={destination.amount}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
    </section>











{/* 








            <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./images/destinations/image1.jpg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Rome</h1>
                        <p className='flex items-center space-x-2'>
                            <span className='text-yellow-500'><AiFillStar/></span>
                            <span>4.5</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'><IoLocationOutline/> <span>Itally</span></p>
                </div>
            </div>
            <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./images/destinations/image3.jpg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Dubai</h1>
                        <p className='flex items-center space-x-2'>
                            <span className='text-yellow-500'><AiFillStar/></span>
                            <span>4.5</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'><IoLocationOutline/> <span>UAE</span></p>
                </div>
            </div>
            <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./images/destinations/image4.jpg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Rio de jeneiro</h1>
                        <p className='flex items-center space-x-2'>
                            <span className='text-yellow-500'><AiFillStar/></span>
                            <span>4.5</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'><IoLocationOutline/> <span>Brazil</span></p>
                </div>
            </div>
            <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./images/destinations/image5.jpg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Madarid</h1>
                        <p className='flex items-center space-x-2'>
                            <span className='text-yellow-500'><AiFillStar/></span>
                            <span>4.5</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'><IoLocationOutline/> <span>Spain</span></p>
                </div>
            </div>
            <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./images/destinations/image7.jpg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Mubai</h1>
                        <p className='flex items-center space-x-2'>
                            <span className='text-yellow-500'><AiFillStar/></span>
                            <span>4.5</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'><IoLocationOutline/> <span>India</span></p>
                </div>
            </div>
            <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./images/destinations/image8.jpg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Vietnam</h1>
                        <p className='flex items-center space-x-2'>
                            <span className='text-yellow-500'><AiFillStar/></span>
                            <span>4.5</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'><IoLocationOutline/> <span>Hanoi</span></p>
                </div>
            </div>
            <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./images/destinations/image10.jpg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>London</h1>
                        <p className='flex items-center space-x-2'>
                            <span className='text-yellow-500'><AiFillStar/></span>
                            <span>4.5</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'><IoLocationOutline/> <span>Uk</span></p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Places