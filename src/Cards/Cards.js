import React from "react";
import avtars from "../Images/avatar (1).svg";
import avtar from "../Images/avatar.svg";
import img1 from "../Images/image (2).svg";
import img from "../Images/image.svg";
import rating from "../Images/star row.png";

const Cards = () => {
  return (
    <div classNameName="w-full mx-auto mt-20">
      <div className="w-5/6 mx-auto flex justify-between flex-wrap">
        <h1>
          Find your next adventure with these{" "}
          <span className="text-blue-700">flight deals</span>
        </h1>

        <h1 className="text-blue-900">All {"->"}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* <!--First card--> */}
        <div className="md:p-8 p-2 bg-white">
          <img className="rounded-lg w-full" src={img} alt="" />
          <p className="text-indigo-500 font-semibold text-base mt-2">
            Maldives
          </p>
          <h1 className="font-semibold text-gray-600 leading-none text-[18px] mt-1 capitalize truncate">
            Stay among the atolls in{" "}
            <span className="text-[#5CD6C0]">Maldives</span>
          </h1>
          {/* <!--Description--> */}
          <div className="max-w-full">
            <p className="text-base font-[18px] tracking-wide text-gray-400 mt-1">
              From the 2nd century AD, the islands were known as the 'Money
              Isles' due to the abundance of cowry shells, a currency of the
              early ages.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mt-20">
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="random user"
              />
              <div>
                <p className="text-gray-400 font-semibold">Lugano Shabani</p>
                <p className="text-gray-400 font-semibold text-sm">
                  Seoul, South Korea | April 2019
                </p>
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="max-w-full">
              <p className="text-base font-[18px] tracking-wide text-gray-400 mt-1">
                What a great experience using Tripma! I booked all of my flights
                for my gap year through Tripma and never had any issues. When I
                had to cancel a flight because of an emergency, Tripma support
                helped me read more...
              </p>
            </div>
          </div>
        </div>
        {/* <!--End of first card--> */}

        {/* <!--Second Tag--> */}
        <div className="p-8 bg-white">
          <img className="rounded-lg w-full" src={img1} alt="" />
          <p className="text-indigo-500 font-semibold text-base mt-2">
            Morocco
          </p>
          <h1 className="font-semibold text-gray-600 leading-none text-[18px] mt-1 capitalize truncate">
            Experience the Ourika Valley in{" "}
            <span className="text-[#5CD6C0]">Morroco</span>
          </h1>
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-400 mt-1">
              Morocco’s Hispano-Moorish architecture blends influences from
              Berber culture, Spain, and contemporary artistic currents in the
              Middle East.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mt-20">
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src={avtars}
                alt="random user"
              />
              <div>
                <p className="text-gray-400 font-semibold">Kaori Yamaguchi</p>
                <p className="text-gray-400 font-semibold text-sm">
                  Honolulu, Hawaii | February 2017
                </p>
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="max-w-full">
              <p className="text-base font-[18px] tracking-wide text-gray-400 mt-1">
                My family and I visit Hawaii every year, and we usually book our
                flights using other services. Tripma was recommened to us by a
                long time friend, and I’m so glad we tried it out! The process
                was easy and read more...
              </p>
            </div>
          </div>
        </div>
        {/* <!--End of first card--> */}

        {/* <!--Third  card--> */}
        <div className="p-8 bg-white">
          <img
            className="h-80 rounded-lg w-full object-cover object-center"
            alt=""
            src={img}
          />
          <p className="text-indigo-500 font-semibold text-base mt-2">Goa</p>
          <h1 className="font-semibold text-gray-600 leading-none text-[18px] mt-1 capitalize truncate">
            Live traditionally in <span className="text-[#5CD6C0]">Goa</span>
          </h1>
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-400 mt-1">
              Traditional goa yurts consists of an angled latticework of wood or
              bamboo for walls, ribs, and a wheel.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mt-20">
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src={avtar}
                alt="random user"
              />
              <div>
                <p className="text-gray-400 font-semibold">Yifei Chen</p>
                <p className="text-gray-400 font-semibold text-sm">
                  Berlin, Germany | April 2019
                </p>
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="max-w-full">
              <p className="text-base font-[18px] tracking-wide text-gray-400 mt-1">
                When I was looking to book my flight to Berlin from LAX, Tripma
                had the best browsing experiece so I figured I’d give it a try.
                It was my first time using Tripma, but I’d definitely recommend
                it to a friend and use it for read more...
              </p>
            </div>
          </div>
        </div>
        {/* <!--End of first card--> */}
      </div>
      <div className="mx-auto">
        <h1 className="text-[18px] px-[20px] py-[15px] text-white bg-[#605DEC] w-[200px] rounded-xl mx-auto mt-10 hover:bg-[green]">
          Explore more stays
        </h1>
      </div>
    </div>
  );
};

export default Cards;
