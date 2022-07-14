import { Link, Outlet, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import RoundedButton from "../button/rounded-button.component";
import { buttons } from "../../data/dummy-data/buttons";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import DropDown from "../dropdown-menu/dropdown-menu.component";
import { getMenuButtonCount } from "../../utils/getMenuButtonCount";
import { useAuth0 } from "@auth0/auth0-react";
import { ClipLoader } from "react-spinners";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  // menu count showed in the page
  const [menuButtonCount, setMenuButtonCount] = useState(1);

  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  //use auth login method
  const { loginWithRedirect } = useAuth0();

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
          <div className="flex justify-center items-center gap-3">
            {windowSize <= 1024 ? (
              <DropDown />
            ) : (
              <>
                <Link to="/list" className="base-button">
                  List your property
                </Link>
                {isLoading ? (
                  <div className="base-button text-blue-500 px-4 py-2 bg-white flex justify-center items-center">
                    <ClipLoader size={24} color={"#0f70c2"} />
                  </div>
                ) : isAuthenticated ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="base-button text-blue-500 px-4 py-2 bg-white flex justify-center items-center">
                      <AiOutlineUser size={24} />
                    </div>
                    <button
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                      className="base-button text-blue-500 px-4 py-2 bg-white"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    className="base-button text-blue-500 px-4 py-2 bg-white"
                  >
                    Login
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        {/* buttons for route */}
        <div className="flex items-center justify-between xl:justify-start w-2/3 mx-auto pt-[20px]">
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
      <Outlet />
    </>
  );
};

export default Navbar;
