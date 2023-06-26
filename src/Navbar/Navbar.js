import React from "react";
import { Link } from "react-router-dom";
import img from "../Images/round@2x.png";
import "./Navbar.css";
const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClicks = index => {
    setActiveIndex(index);
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="bg-[#FFFFFF] min-w-min">
      <nav className=" flex justify-between items-center w-full mx-auto p-4">
        <div>
          <Link to="/">
            <img className="h-9 w-28" src={img} alt="" />
          </Link>
        </div>
        <ul className="lg:flex justify-between gap-16 hidden items-center ">
          <Link
            className={
              activeIndex === 0 ? (
                "active"
              ) : (
                "mx-4 text-[#7C8DB0] text-base font-normal  text-center"
              )
            }
            onClick={() => handleClicks(0)}
          >
            {" "}
            Flights
          </Link>
          <Link
            className={
              activeIndex === 1 ? (
                "active"
              ) : (
                "mx-4 text-[#7C8DB0] text-base font-normal  text-center"
              )
            }
            onClick={() => handleClicks(1)}
          >
            {" "}
            Hotels{" "}
          </Link>
          <li
            className={
              activeIndex === 2 ? (
                "active"
              ) : (
                "mx-4 text-[#7C8DB0] text-base font-normal  text-center"
              )
            }
            onClick={() => handleClicks(2)}
          >
            {" "}
            Package{" "}
          </li>
          <Link
            to="/login"
            className={
              activeIndex === 3 ? (
                "active"
              ) : (
                "mx-4 text-[#7C8DB0] text-base font-normal  text-center"
              )
            }
            onClick={() => handleClicks(3)}
          >
            Sign In
          </Link>{" "}
          <Link
            to="/signup"
            className="mx-4  text-[white] text-base rounded-xl font-normal border-2 px-[12px] py-[20px] bg-[#605DEC] text"
          >
            Sign Up
          </Link>
        </ul>
        <div className="py-9 lg:hidden" onClick={handleClick}>
          <button type="button" className="block w-8 h-1 bg-[#615f5f] mb-1" />
          <button type="button" className="block w-8 h-1 bg-[#666464] mb-1" />
          <button type="button" className="block w-8 h-1 bg-[#6e6b6b]" />
        </div>
      </nav>

      {visible && (
        <div className="lg:hidden shadow-lg w-5/6 mx-auto border-2 ">
          <Link to="" className="block text-[#9c9a9a] py-2 px-4">
            Hotels
          </Link>
          <Link className="block text-[#989595] py-2 px-4" href="/">
            Fligts
          </Link>
          <Link className="block text-[#9b9898] py-2 px-4" href="/">
            Packages
          </Link>
          <Link className="block text-[#979595] py-2 px-4" href="/">
            Sign In
          </Link>
          <Link
            className="block  py-1 px-4 border-2 bg-[#383eb8] h-8 w-32 text-white"
            href="/"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
