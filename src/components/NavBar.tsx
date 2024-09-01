// src/components/NavBar.tsx
import React from "react";
import { GoBook, GoProject, GoPackage, GoStar } from "react-icons/go";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <ul className="flex items-center h-16">
          <li className="mr-4">
            <a
              href="#"
              className="flex items-center text-white text-[12px] font-semibold border-b-2 border-orange-500 h-full"
            >
              <GoBook className="mr-2" />
              Overview
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white h-full"
            >
              <GoProject className="mr-2" />
              Repositories
              <span className="ml-1 px-2 py-1 text-xs bg-gray-800 rounded-full">
                11
              </span>
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white h-full"
            >
              <GoProject className="mr-2" />
              Projects
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white h-full"
            >
              <GoPackage className="mr-2" />
              Packages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white h-full"
            >
              <GoStar className="mr-2" />
              Stars
              <span className="ml-1 px-2 py-1 text-xs bg-gray-800 rounded-full">
                1
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
