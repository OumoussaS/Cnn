import React, { useEffect } from "react";
import Search from "../components/room/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Listing from "../components/Listing";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";

import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function searchPage() {
  const router = useRouter();

  //ES6 Destructuring:
  const { location, startDate, endDate, noOfGuests } = router.query;

  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  // const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  // const range = `${formattedStartDate} - ${formattedEndDate}`;
  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
    useSelector((state) => state.allRooms);

  let { page = 1 } = router.query;
  page = Number(page);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);
  console.log("pathname" + router.pathname);
  return (
    <div>
      {/* <Search placeholder={`${location} | ${range} | ${noOfGuests} Guests`} /> */}
      <Header />
      <Search />

      <section className="hidden xl:inline-flex xl:min-w-[600px]"></section>
    </div>
  );
}

export default searchPage;

export async function getServerSideProps() {
  const searchResult = await fetch("http://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}
