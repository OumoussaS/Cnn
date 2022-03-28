import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UsersIcon,
  ArrowDownIcon,
} from "@heroicons/react/solid";

import { useState } from "react";
import { useRouter } from "next/router";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  // const [location, setLocation] = useState("");
  const router = useRouter();
  const { location } = router.query;

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: "Selection",
  // };
  // const search = () => {
  //   router.push({
  //     pathname: "/search",
  //     query: {
  //       location: location,
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //       noOfGuests: noOfGuests,
  //     },
  //   });
  // };

  // const handleSelect = (ranges) => {
  //   setStartDate(ranges.Selection.startDate);
  //   setEndDate(ranges.Selection.endDate);
  // };

  // const resetInput = () => {
  //   setLocation("");
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (location.trim()) {
  //     router.push(`/?location=${location}`);
  //     // search();
  //     resetInput();
  //   } else {
  //     router.push("/");
  //   }
  // };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        {" "}
        <img
          style={{ height: 200, width: 200 }}
          src="/images/logo.png"
          alt="CozyCasa"
        />
        {/* <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        /> */}
      </div>
      {/* mid */}
      {/* <form onSubmit={submitHandler}>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={placeholder || "Start your search"}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>
      </form> */}
      {location ? (
        <div className="flex items-center py-2 font-semibold text-lg">
          {/* <Link href="/search">
              <a style={{ color: "purple", textDecorationLine: "underline" }}>
                Serach?
              </a>
            </Link> */}
          <button className="text-white bg-purple-500 px-5 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            {/* <SearchIcon className="h-2 cursor-pointer" /> */}
            <Link href="/search">
              <a>Get Back to Search</a>
            </Link>
          </button>
        </div>
      ) : router.pathname == "/search" ? (
        <div className="flex items-center py-2 font-semibold text-md">
          <h1 className="border-2 rounded-xl p-5 border-black bg-purple-200">
            Type Below Where You Want To Stay In!
          </h1>
        </div>
      ) : router.pathname == "/login" ? (
        <div className="flex items-center  font-semibold text-base">
          <h1>
            Don't have an account? Register{" "}
            <button className="text-purple-500 bg-gray-300 px-5 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
              {/* <SearchIcon className="h-2 cursor-pointer" /> */}
              <Link href="/register">
                <a> Here</a>
              </Link>
            </button>
          </h1>
        </div>
      ) : (
        <div className="flex items-center py-2 font-semibold text-base">
          <h1>
            Welcome to Cozy Casa!{" "}
            <button className="text-white bg-purple-500 px-5 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
              {/* <SearchIcon className="h-4 cursor-pointer" /> */}
              <Link href="/search">
                <a>Serach for stays?</a>
              </Link>
            </button>
          </h1>
        </div>
      )}
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
