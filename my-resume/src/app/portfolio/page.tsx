import OverlayCard from "@/components/common/overlayCard";
import SectionTitle from "@/components/common/sectionTitle";
import Tabs from "@/components/common/tabs";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PortfolioPage() {
  const tabsData = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Details",
      value: "Details",
    },
    {
      label: "Mockups",
      value: "Mockups",
    },
    {
      label: "Youtube Videos",
      value: "Youtube Videos",
    },
    {
      label: "Vimeo videos",
      value: "Vimeo videos",
    },
  ];

  return (
    <section id="portfolio" className="relative pt-[6.5rem] box-border">
      <div className="container">
        <SectionTitle name="Portfolio" desp="Some of my most recent projects" />
        <Tabs tabsData={tabsData} />

        <div className="grid grid-cols-3">
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
        </div>

        {/* <div>
          <div className="grid grid-cols-3">
            <div className="relative box-border block px-[12px] mt-[24px]">
              <div className="overflow-hidden relative block">
                <img
                  className="w-full h-auto block box-border"
                  src="project-1.jpg"
                />
                <div className="flex  absolute items-center justify-center bg-black opacity-0 w-full inset-[0] text-center hover:opacity-80 hover:cursor-pointer hover:transition hover:duration-700 hover:ease-in-out hover:delay-1 hover:all ">
                  <button className="cursor-pointer inset-0 p-0 border-0 m-0 w-full h-full"></button>
                  <div className="absolute flex flex-col items-center justify-center">
                    <p className="text-c1 text-4xl mb-3 mt-0">
                      <FontAwesomeIcon
                        icon={faFileAlt}
                        className="origin-center"
                      />
                    </p>
                    <h5 className="text-white text-lg">Detail Project</h5>
                    <span className="text-white text-sm">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
