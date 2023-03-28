import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer" className=" bg-black py-[2.5rem] relative ">
      <div className="container">
        <div className="grid grid-cols-2  text-white">
          <div className=" text-left">
            <p className="mb-[.5rem]">
              Copyright © 2023{" "}
              <a className=" font-semibold text-c1" href="/">
                Muhammad Ahsan Riaz
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="text-right">
            <p className="mb-[.5rem]">
              Designed by{" "}
              <a className="font-semibold  text-c1" href="/">
                Muhammad Ahsan Riaz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
