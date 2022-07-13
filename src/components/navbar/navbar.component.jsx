import { Link, Outlet, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import RoundedButton from "../button/rounded-button.component";
import { buttons } from "../../data/dummy-data/buttons";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import DropDown from "../dropdown-menu/dropdown-menu.component";
import { getMenuButtonCount } from "../../utils/getMenuButtonCount";

const Navbar = () => {
  // menu count showed in the page
  const [menuButtonCount, setMenuButtonCount] = useState(1);

  //get the route path
  let { pathname } = useLocation();
  //custmize hook to detect window size
  const windowSize = useWindowSize();
  //set the menu button counts according to the window size
  useEffect(() => {
    const menuCount = getMenuButtonCount(windowSize);
    setMenuButtonCount(menuCount);
  }, [windowSize]);

  return (
    <>
      <div className="w-full h-[200px] bg-main-blue text-white ">
        <div className="flex items-center justify-between w-2/3 mx-auto pt-[20px]">
          <h1 className="text-xl lg:text-2xl">Booking.com</h1>
          <div className="flex gap-3">
            {windowSize <= 1024 ? (
              <DropDown />
            ) : (
              <>
                <Link to="/list" className="base-button">
                  List your property
                </Link>
                <Link
                  to={"/auth"}
                  className="base-button text-blue-500 px-4 py-2 bg-white"
                >
                  Register
                </Link>
                <Link
                  to={"/auth"}
                  className="base-button text-blue-500 px-4 py-2 bg-white"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
        {/* buttons for route */}
        <div className="flex items-center justify-between w-2/3 mx-auto pt-[20px]">
          <div className="flex items-center justify-between w-full">
            {buttons.slice(0, menuButtonCount).map((button) => (
              <RoundedButton
                key={button.id}
                route={button.route}
                location={pathname}
              >
                {button.icon}
                {button.text}
              </RoundedButton>
            ))}
            {menuButtonCount === 6 ? (
              ""
            ) : (
              <DropDown menu={buttons.slice(menuButtonCount)} />
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
