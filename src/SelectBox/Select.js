import axios from "axios";
import React from "react";

const Select = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");

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
      const res = await axios.post(
        "https://tame-tan-cockroach-boot.cyclic.app/flight/search",
        {
          from,
          to,
          departureDate,
        }
      );
      console.log(res);
    }
  };
  return (
    <div className=" w-full flex flex-wrap items-center  my-10 mx-5">
      <div className="w-[200px] mx-auto">
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={e => setFrom(e.target.value)}
        >
          <option selected>From Where?</option>
          <option value="Raipur">Raipur</option>
          <option value="Delhi">Delhi</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Lucknow">Lucknow</option>
        </select>
      </div>
      {/* second */}
      <div className="w-[200px] mx-auto">
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={e => setTo(e.target.value)}
        >
          <option selected>Where to?</option>
          <option value="Raipur">Raipur</option>
          <option value="Delhi">Delhi</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Lucknow">Lucknow</option>
        </select>
      </div>
      {/* third */}
      <div className="w-[200px] mx-auto">
        <input
          onChange={e => setDepartureDate(e.target.value)}
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
  );
};

export default Select;
