import { BiBed } from "react-icons/bi";
import { FaPlaneDeparture, FaHotel, FaCarSide, FaTaxi } from "react-icons/fa";
import { MdOutlineAttractions } from "react-icons/md";
export const buttons = [
  {
    id: 1,
    route: "/",
    text: "Stays",
    icon: <BiBed />,
  },
  {
    id: 2,
    route: "/flights",
    text: "Flights",
    icon: <FaPlaneDeparture />,
  },
  {
    id: 3,
    route: "/flightsHotel",
    text: "Flight + Hotel",
    icon: <FaHotel />,
  },
  {
    id: 4,
    route: "/cars",
    text: "Car rentals",
    icon: <FaCarSide />,
  },
  {
    id: 5,
    route: "/attractions",
    text: "Attractions",
    icon: <MdOutlineAttractions />,
  },
  {
    id: 6,
    route: "/taxis",
    text: "Airpot Taxis",
    icon: <FaTaxi />,
  },
];
