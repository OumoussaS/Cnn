import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RoomReview from "../../components/room/RoomReview";
import { toast } from "react-toastify";
import { clearErrors } from "../../redux/actions/roomActions";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-bootstrap";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Fade from "../Fade";
function RoomDetails() {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const onChange = (dates) => {
    const [checkInDate, checkOutDate] = dates;
    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);
    console.log(checkInDate);
    console.log(checkOutDate);
    if (checkInDate && checkOutDate) {
      console.log(checkInDate.toISOString(), checkOutDate.toISOString());
    }
  };
  const dispatch = useDispatch();
  function check(exists) {
    if (exists) {
      return <CheckIcon className="h-8 w-8 text-green-600 p-2" />;
    }
    if (!exists) {
      return <XIcon className="h-8 w-8 text-red-600 p-2" />;
    }
  }

  const { room, error } = useSelector((state) => state.RoomDetails || {});
  //   console.log(room);

  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, []);

  return (
    <>
      <Head>
        <title>{room.name} - CozyCasa</title>
      </Head>
      <Fade />
      {/* <div>
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-2 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-cover object-center rounded border hover:scale-110 transition duration-300 ease-in-out border-gray-200"
                src="/images/room.png"
              />

              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {room.category}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {room.name}
                </h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="text-gray-600 ml-3">{room.ratings}</span>
                  </span>
                </div>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-900">
                  {room.description}
                </p>
                <div class=" mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <h1 class="text-gray-900 te text-xl font-medium">
                    {" "}
                    Address :{" "}
                  </h1>
                  <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-900">
                    {room.address}
                  </p>
                </div>
                <div class=" mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <h1 class="text-gray-900 text-xl font-medium"> Features</h1>
                  <ol>
                    <li class="flex text-gray-900 p-2">
                      <span className="font-semibold pr-1 text-purple-900">
                        {room.guestCapacity}
                      </span>{" "}
                      Guests
                    </li>
                    <li class="flex text-gray-900 pl-2 pb-2">
                      <span className="font-semibold pr-1 text-purple-900">
                        {room.numOfBeds}
                      </span>{" "}
                      Beds
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.breakfast)}
                      Breakfast
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.internet)}
                      Internet
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.airConditioned)}
                      Air Conditioned
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.petsAllowed)}
                      Pets Allowed
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.roomCleaning)}
                      Room Cleaning
                    </li>
                  </ol>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    {room.pricePerNight}
                  </span>
                  <button class="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                    Book It
                  </button>
                </div>
              </div>
              <p className="mt-5 mb-3">PiCK check in & Check out date</p>
              <DatePicker
                className="w-100"
                selected={checkInDate}
                onchange={onChange}
                startDate={checkInDate}
                endDate={checkOutDate}
                selectsRange
                inline
              />
              <br />
              <RoomReview />
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
}

export default RoomDetails;
