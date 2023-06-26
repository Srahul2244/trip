import React from "react";
import { Link } from "react-router-dom";

const SearchData = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 classNameName="text-[18px] font-semibold text-[#6E7491] ">
        Choose a <span className="text-blue-700 ">departing</span> flight
      </h1>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {data.map(ele => {
              return (
                <tr className="hover:bg-gray-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src={ele.image}
                        alt=""
                      />
                      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {ele.arrivalTime}
                      </div>
                      <div className="text-gray-400">{ele.airline}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      {ele.departureTime}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    Rs{ele.price}
                    <h1>round trip</h1>
                  </td>
                  <td className="px-6 py-4">
                    {ele.duration} in HNL
                    <h1> stops:{ele.stops}</h1>
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/checkout/${ele._id}`}>
                      <button className="px-[10px] py-[4px] text-white bg-blue-500 rounded-lg">
                        Book
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
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
