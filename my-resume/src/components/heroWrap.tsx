"use client";
import Link from "next/link";
import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

type Props = {};

export default function HeroWrap({}: Props) {
  return (
    <section id="hero-wrap" className=" py-[6.5rem]">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: "intro-bg-2.jpg", speed: -20 }]}
          className="aspect-[2/1] h-128"
        >
          <div className=" absolute inset-0 w-full h-full bg-black opacity-80"></div>
          <div className="absolute text-center -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2 mx-auto ">
            <h2 className="text-6xl text-white font-thin mb-3">
              Interested in working with me?
            </h2>
            <button
              id="hireMe-btn"
              className="bg-c1 text-black py-[.8rem] px-[2.6rem]"
            >
              Hire Me!
            </button>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </section>
  );
}
