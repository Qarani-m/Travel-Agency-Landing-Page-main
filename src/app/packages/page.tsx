import PackageCard from "@/components/packages/PackageCard";
import React from "react";
import NavBar from "@/components/common/NavBar";

function page() {
  const packages = {
    romanticGetaway: {
      title: "Romantic Getaway Package for Couples",
      description: "Experience romance in enchanting destinations.",
      destinations: ["Paris", "Santorini", "Maldives"],
      image:"https://images.pexels.com/photos/3822070/pexels-photo-3822070.jpeg?auto=compress&cs=tinysrgb&w=600",
      activities: [
        "Sunset cruises",
        "Couples' spa treatments",
        "Candlelit dinners",
      ],
    },
    christmasHoliday: {
      title: "Christmas Holiday Package",
      description: "Celebrate the festive season in magical locations.",
      image:"https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/07/2.-Switzerland-Canton-of-Schaffhausen-Stein-am-Rhein-Christmas-tree-on-River-Rhine_Credit_GettyImages-707447497.jpg?resize=2048,1367",
      destinations: ["Europe Christmas markets", "Lapland", "Tropical escapes"],
      activities: ["Christmas-themed events", "Winter wonderland experiences"],
    },
    adventure: {
      title: "Adventure Package",
      description: "Embark on thrilling adventures in exotic locales.",
      image:"https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/photography-tours-2018-tanzania-7.jpg",
      destinations: ["Costa Rica", "New Zealand", "South Africa"],
      activities: [
        "Hiking",
        "White-water rafting",
        "Zip-lining",
        "Safari adventures",
      ],
    },
    culturalImmersion: {
      title: "Cultural Immersion Package",
      description: "Immerse yourself in the rich cultures of diverse regions.",
      image:"https://wander-lush.org/wp-content/uploads/2020/12/Cultural-tourism-destinations-Oaxaca-CanvaPro.jpg",
      destinations: ["Historical sites", "Local festivals", "Cooking classes"],
      activities: ["Interactions with indigenous communities"],
    },
    wellnessRetreat: {
      title: "Wellness Retreat Package",
      description: "Nourish your body and soul in serene surroundings.",
      image:"https://hips.hearstapps.com/hmg-prod/images/experience-seven-senses-mallora-1644848502.jpg?crop=1xw:1xh;center,top&resize=980:*",
      destinations: ["Bali", "Thailand", "Swiss Alps"],
      activities: [
        "Yoga retreats",
        "Meditation sessions",
        "Spa treatments",
        "Healthy cuisine",
      ],
    },
    luxuryEscapes: {
      title: "Luxury Escapes Package",
      description:
        "Indulge in opulence and extravagance at world-class destinations.",
    image:"https://hips.hearstapps.com/hmg-prod/images/como-castello-del-nero-1644847983.jpg?crop=1xw:1xh;center,top&resize=980:*",
      destinations: ["French Riviera", "Amalfi Coast", "Dubai"],
      activities: [
        "Stays in high-end resorts",
        "Private tours",
        "Exclusive dining experiences",
        "Personalized services",
      ],
    },
  };
  const packagepacks = Object.entries(packages).map(([key, value], index) => (
    <PackageCard packages={value} />
  ));

  return (
    <div className="px-64">
      <NavBar />

      <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h5 className="text-base md:text-lg text-gray-700 mb-1">
              Explore Our Exciting Packages
            </h5>
            <h1 className="text-4xl md:text-6xl  font-semibold text-orange-500">
              Discover Our Amazing Packages
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">{packagepacks}</div>
        </div>
      </section>
    </div>
  );
}

export default page;
