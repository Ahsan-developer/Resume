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
    <section id="home">
      <div>
        <div>
          <div>
            <h1>Hi, I'm a Freelancer</h1>
            <h2>
              <div>
                <span></span>
                <span></span>
              </div>
            </h2>
            <p></p>
            <Link href={"#"}>View My Works</Link>
            <Link href={"#"}>
              Contact Me
              <span>
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="origin-center"
                />
              </span>
            </Link>
          </div>
          <div></div>
        </div>
        <div className=" flex mb-[1.5rem] self-center mt-[0] pl-[0.75rem] pr-[0.75rem] w-[80%]">
          <div className=" visible rounded-full w-full p-[1rem] inline-block">
            <img
              className="rounded-full w-auto h-auto block"
              alt="Muhammad Ahsan Riaz"
              src={"/profile-image.png"}
            />
          </div>
        </div>
      </div>
      <Link href={"#about"}>
        <FontAwesomeIcon icon={faArrowDown} className="origin-center" />
      </Link>
    </section>
  );
}
