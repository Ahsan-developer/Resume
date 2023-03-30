"use client";
import { personalInfoData } from "@/utils/personalInfo";
import { faBars, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import SocialIcons from "../common/socialIcons";

const navLink = [
  { label: "Home", link: "#home" },
  { label: "About Me", link: "#about" },
  { label: "What I Do", link: "#services" },
  { label: "Resume", link: "#resume" },
  { label: "Portfolio", link: "#portfolio" },
  { label: "FAQ", link: "#faq" },
  { label: "Client Speak", link: "#testimonial" },
  { label: "Contact ME", link: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

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
        <button
          className=" block border-none h-[30px] m-[18px 15px] p-[10px] relative text-center  w-[25px] z-50 "
          style={{ color: open ? "white" : "black" }}
          onClick={() => setOpen(!open)}
        >
          <div className="block top-[3px] h-[2px] w-full left-0 absolute ">
            {!open ? (
              <FontAwesomeIcon icon={faBars} size={"xl"} />
            ) : (
              <FontAwesomeIcon icon={faTimes} size={"xl"} />
            )}
          </div>
        </button>
        <div
          className="bg-black opacity-90 block left-0 fixed h-[100vh] top-0 mt-0 right-0 w-full text-white"
          style={{ display: open ? "block" : "none" }}
        >
          <div className="flex items-center justify-center flex-col h-full box-border">
            <ul className=" max-h-[80vh] min-h-[400px] overflow-hidden overflow-y-auto p-[15px] mt-0 box-border font-semibold text-[1.3125rem]">
              <li className="border-0 w-[400px] text-center block  box-border leading-11">
                {navLink.map((item) => {
                  return (
                    <a
                      href={item.link}
                      className=" cursor-pointer relative pt-[8px] pb-[8px] block text-[22px]"
                      onClick={() => setOpen(!open)}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </li>
              <li className="flex justify-center">
                <SocialIcons color="white" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
