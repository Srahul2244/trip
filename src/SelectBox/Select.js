import axios from "axios";
import React, { useState } from "react";
import SearchData from "../SearchData/SearchData";
import Loaders from "../Loaders/Loaders";
const Select = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");
  const [data, setData] = React.useState([]);
  const[loading,setLoading] =useState(false)


  const handleSearch = async () => {
    if (from === "") {
      return alert("please select the input field");
    }
    if (to === "") {
      return alert("please select the input field");
    }
    if (departureDate === "") {
      return alert("please select the input field");
    } else {
      setLoading(true)
      const res = await axios.post(
        "https://tame-tan-cockroach-boot.cyclic.app/flight/search",
        {
          from: from.charAt(0).toUpperCase() + from.slice(1), 
        to: to.charAt(0).toUpperCase() + to.slice(1),
          departureDate,
        }
      );
        setLoading(false)
      console.log(res.data.data);
      setData(res.data.data);
    }
  };

  return (
    <div>
      <div className=" w-full flex flex-wrap items-center  my-10 mx-5">
        <div className="w-[200px] mx-auto">
          {/* <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={e => setFrom(e.target.value)}
          >
            <option selected>From Where?</option>
            <option value="Raipur">Raipur</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Lucknow">Lucknow</option>
          </select> */}
           <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="from"
            value={from}
            placeholder="From"
            onChange={(e) => {
              setFrom(e.target.value);
             
            }}
          />
        </div>
        {/* second */}
        <div className="w-[200px] mx-auto">
          {/* <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={e => setTo(e.target.value)}
          >
            <option selected>Where to?</option>
            <option value="Raipur">Raipur</option>
            <option value="kolkata">Delhi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Mumbai">Lucknow</option>
          </select> */}
           <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="to"
            value={to}
            placeholder="To"
            onChange={(e) => {
              setTo(e.target.value);
              
            }}
          />
        </div>
        {/* third */}
        <div className="w-[200px] mx-auto">
          <input
            onChange={e => {setDepartureDate(e.target.value)
            localStorage.setItem("departureDate",e.target.value)
            }}
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={departureDate}
          />
        </div>
        {/* fourth */}
        <div className="w-[200px] mx-auto">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a person</option>
            <option value="US">Adult</option>
            <option value="CA">Minors</option>
          </select>
        </div>
        <div className="w-[200px] mx-auto">
          <button
            className="text-white px-[40px] py-[15px] bg-[#605DEC] rounded-xl"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <SearchData data={data} />
      {loading?<Loaders/>:null}
    </div>
  );
};

export default Select;
