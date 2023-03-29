import { personalInfoData } from "@/utils/personalInfo";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className=" bg-white drop-shadow-md font-semibold z-50 flex h-auto w-full   left-[0] fixed">
      <div className="flex items-center font-semibold bg-white flex-wrap justify-between text-black ml-auto mr-auto pl-[0.75rem] pr-[0.75rem] w-[70%]">
        <Link
          href="/"
          title={personalInfoData.name}
          className=" flex items-center font-bold self-stretch leading-12"
        >
          {personalInfoData.name.toLocaleUpperCase()}
        </Link>
        <div className=" font-thin ml-auto mr-[0.5rem]">
          <span className=" mr-[0.5rem]">
            <FontAwesomeIcon
              icon={faPhone}
              className="origin-center -rotate-90"
            />
          </span>
          {personalInfoData.phone}
        </div>
        <button className=" block border-none h-[30px] m-[18px 15px] p-[10px] relative w-[25px]">
          <span className=" bg-black block top-[7px] h-[2px] w-full left-0 absolute"></span>
          <span className=" bg-black block top-[14px] h-[2px] w-full left-0 absolute"></span>
          <span className=" bg-black block top-[21px] h-[2px] w-full left-0 absolute"></span>
        </button>
        <div></div>
      </div>
    </nav>
  );
}
