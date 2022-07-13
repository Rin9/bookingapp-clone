import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import {
  AiOutlineEdit,
  AiOutlineUserAdd,
  AiOutlineLogin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const DropDown = ({ menu = [] }) => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {menu.length === 0 ? (
              <HiOutlineMenu className="h-[25px] w-[25px]" />
            ) : (
              "More"
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {menu.length === 0 ? (
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-main-blue text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <AiOutlineEdit
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      List your property
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={"/auth"}
                      className={`${
                        active ? "bg-main-blue text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <AiOutlineUserAdd
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Register
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={"/auth"}
                      className={`${
                        active ? "bg-main-blue text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <AiOutlineLogin
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Login
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          ) : (
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {menu.map((item, index) => {
                return (
                  <Menu.Item key={item.text + index}>
                    {({ active }) => (
                      <Link
                        to={item.route}
                        className={`${
                          active ? "bg-main-blue text-white" : "text-gray-900"
                        } group flex w-full items-center gap-5 rounded-md px-2 py-2 text-sm`}
                      >
                        {item.icon}
                        {item.text}
                      </Link>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          )}
        </Transition>
      </Menu>
    </div>
  );
};

export default DropDown;
