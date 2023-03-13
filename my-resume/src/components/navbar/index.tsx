import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className=" bg-white font-semibold flex h-auto w-full absolute  left-[0]">
      <div className="flex items-center font-semibold bg-white flex-wrap justify-between w-full text-black ml-auto mr-auto pl-[0.75rem] pr-[0.75rem]">
        <Link
          href="/"
          title="MUHAMMAD AHSAN RIAZ"
          className=" flex items-center font-semibold self-stretch text-md "
        >
          MUHAMMAD AHSAN RIAZ
        </Link>
        <div className=" font-thin ">
          <FontAwesomeIcon icon={faPhone} />
          <span>(+92) 3040553943</span>
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
