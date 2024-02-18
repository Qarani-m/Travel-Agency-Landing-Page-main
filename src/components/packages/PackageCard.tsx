import Link from "next/link";
import React from "react";

interface Package {
  title: string;
  description: string;
  image: string;
  destinations: string[];
  activities: string[];
}

interface PackageCardProps {
  packages: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ packages }) => {
  const { title, description, destinations, activities, image } = packages;
  const url = title.split(' ')[0];

  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer">
        <img
          className="lg:h-72 md:h-48 w-full object-cover object-center"
          src={image} // Change this line
          alt="blog"
        />

        <div className="p-6  transition duration-300 ease-in">
          <h2 className="text-base font-medium text-indigo-300 mb-1">
            October 29, 2021
          </h2>
          <h1 className="text-2xl font-semibold mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>

          <div className="mt-4">
            <h3 className="font-semibold">Destinations:</h3>
            <ul className="flex flex-wrap">
              {destinations.map((destination, index) => (
                <li key={index} className="mr-2 mb-2">
                  {destination}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Activities:</h3>
            <ul className="flex flex-wrap">
              {activities.map((activity, index) => (
                <li key={index} className="mr-2 mb-2">
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-16"></div>

          <div className="flex items-center flex-wrap  bottom-12">
          <a href={`/packages/${url}`} className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
              View Packages
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
