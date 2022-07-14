import { Link } from "react-router-dom";

const BlankLayout = ({ children }) => {
  return (
    <div className="bg-main-blue w-full h-screen text-white">
      <div className="py-[20px] w-2/3 mx-auto">
        <Link to={"/"} className="text-2xl">
          Booking.com
        </Link>
      </div>
      {children}
    </div>
  );
};

export default BlankLayout;
