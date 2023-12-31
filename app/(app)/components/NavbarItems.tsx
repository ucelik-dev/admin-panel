'use client'

import Link from "next/link";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu  } from "react-icons/rx";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const NavBarItems = ({userSession}:{userSession:any}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      { isMenuOpen && <HamburgerMenu setIsMenuOpen={setIsMenuOpen} userSession={userSession}/> }

      <nav className="border-b shadow-md mb-5 p-4 pt-2 flex-no-wrap z-10 fixed top-0 flex w-full items-center justify-between bg-gray-50 dark:bg-black">
        <div className="flex mt-4 items-center justify-between w-full">
          <div className="flex items-center gap-3">

            <div className="sm:hidden">
              { isMenuOpen 
              ? <MdClose size={'30'} onClick={() => setIsMenuOpen(!isMenuOpen)} className="!flex md:!hidden"/> 
              : <RxHamburgerMenu size={'30'} onClick={() => setIsMenuOpen(!isMenuOpen)} className="!flex md:!hidden"/>
              }
            </div>

            <ul className="flex gap-6 ml-5">
              <li>
                <Link className="text-sm transition-colors hidden sm:flex" href="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="text-sm transition-colors hidden sm:flex" href="/admin">
                  Admin Management
                </Link>
              </li>
              <li>
                <Link className="text-sm transition-colors hidden sm:flex" href="/business">
                  Businesses Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-between items-center gap-5">
            {userSession ? (
              <form action='/sign-out' method="post" className="flex gap-5">
                <div className="flex flex-col text-sm">
                    <div className="hidden lg:block">User: <span className="font-semibold text-gray-700">{userSession.email}</span></div>
                    <div className="hidden lg:block">Role: <span className="font-semibold text-gray-700">{userSession.user_metadata.role}</span></div>
                </div>
                <button 
                  className="cursor-pointer bg-gray-500 mr-2 px-3 py-1 rounded-lg text-gray-100">
                  Logout 
                </button>
              </form>
            ) : (
              <Link href={"/sign-in"}>
                <button className="cursor-pointer bg-sky-500 mr-2 px-2 py-1 rounded-lg text-gray-100">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default NavBarItems;
