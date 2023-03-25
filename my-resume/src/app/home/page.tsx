import {
  faArrowAltCircleDown,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen py-[3rem] w-full bg-c1 ">
      <div className=" w-[80%]  mr-auto ml-auto py-[1.5rem] px-[1.5rem]">
        <div className="flex w-full">
          <div className=" col-span-7 visible text-left order-0 self-center  w-full">
            <h1 className=" font-light text-5xl leading-[1.3]">
              Hi, I'm a Freelancer
            </h1>
            <h2 className=" font-semibold uppercase leading-[1.3] text-8xl">
              <div>
                <span>Developer</span>
                <span></span>
              </div>
            </h2>
            <p className=" text-lg leading-[1.8] mb-[1rem]">
              based in Islamabad, Pakistan.
            </p>
            <Link
              href={"#"}
              className=" cursor-pointer shadow-[0 5px 15px] shadow-black border-2 font-medium py-[0.8rem] px-[2.6rem] mt-[1rem] bg-black text-white round"
            >
              View My Works
            </Link>
            <Link
              href={"#"}
              className=" cursor-pointer underline border-transparent font-medium py-[0.8rem] px-[2.6rem] mt-[1rem]  text-black round"
            >
              Contact Me
              <span className=" font-medium text-lg ml-[0.5rem]">
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="origin-center"
                />
              </span>
            </Link>

            <div></div>
          </div>
          <div className="col-span-5 flex self-center mt-[0] pl-[0.75rem] pr-[12px] max-w-full">
            <div className=" visible rounded-full w-full p-[1rem] inline-block">
              <img
                className="rounded-full w-auto h-auto block border-[14px] border-white"
                alt="Muhammad Ahsan Riaz"
                src={"/profile-image.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"#about"}
        className=" cursor-pointer relative bottom-1/4 h-[32px] text-xl left-[50%] w-[32px]"
      >
        <FontAwesomeIcon icon={faArrowDown} className="origin-center" />
      </Link>
    </section>
  );
}
