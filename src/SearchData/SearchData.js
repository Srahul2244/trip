import React from "react";
import img1 from "../Images/image 28.png";
import img2 from "../Images/image.svg";
import img from "../Images/Japan Airlines.png";
import imgs from "../Images/United Airlines.png";
const SearchData = () => {
  return (
    <div>
      <h1 classNameName="text-[18px] font-semibold text-[#6E7491]">
        Choose a <span className="text-blue-700 ">departing</span> flight
      </h1>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={img2}
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">16h 45m</div>
                  <div className="text-gray-400">Hawaiian Airlines</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  7:00AM - 4:15PM
                </span>
              </td>
              <td className="px-6 py-4">
                $624
                <h1>round trip</h1>
              </td>
              <td className="px-6 py-4">
                2h 45m in HNL
                <h1> 1 stop</h1>
              </td>
              <td className="px-6 py-4">
                <button className="px-[10px] py-[4px] text-white bg-blue-500 rounded-lg">
                  Book
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={img1}
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">16h 45m</div>
                  <div className="text-gray-400">Hawaiian Airlines</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  7:00AM - 4:15PM
                </span>
              </td>
              <td className="px-6 py-4">
                $624
                <h1>round trip</h1>
              </td>
              <td className="px-6 py-4">
                2h 45m in HNL
                <h1> 1 stop</h1>
              </td>
              <td className="px-6 py-4">
                <button className="px-[10px] py-[4px] text-white bg-blue-500 rounded-lg">
                  Book
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={imgs}
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">16h 45m</div>
                  <div className="text-gray-400">Hawaiian Airlines</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  7:00AM - 4:15PM
                </span>
              </td>
              <td className="px-6 py-4">
                $624
                <h1>round trip</h1>
              </td>
              <td className="px-6 py-4">
                2h 45m in HNL
                <h1> 1 stop</h1>
              </td>
              <td className="px-6 py-4">
                <button className="px-[10px] py-[4px] text-white bg-blue-500 rounded-lg">
                  Book
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={img}
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">16h 45m</div>
                  <div className="text-gray-400">Hawaiian Airlines</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  7:00AM - 4:15PM
                </span>
              </td>
              <td className="px-6 py-4">
                $624
                <h1>round trip</h1>
              </td>
              <td className="px-6 py-4">
                2h 45m in HNL
                <h1> 1 stop</h1>
              </td>
              <td className="px-6 py-4">
                <button className="px-[10px] py-[4px] text-white bg-blue-500 rounded-lg">
                  Book
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={img1}
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">16h 45m</div>
                  <div className="text-gray-400">Hawaiian Airlines</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  7:00AM - 4:15PM
                </span>
              </td>
              <td className="px-6 py-4">
                $624
                <h1>round trip</h1>
              </td>
              <td className="px-6 py-4">
                2h 45m in HNL
                <h1> 1 stop</h1>
              </td>
              <td className="px-6 py-4">
                <button className="px-[10px] py-[4px] text-white bg-blue-500 rounded-lg">
                  Book
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="px-8 py-4 border-blue-600 border-2 w-[200px] ml-auto mr-20">
        Show all Flights
      </h1>
    </div>
  );
};

export default SearchData;
