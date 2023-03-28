import SectionTitle from "@/components/common/sectionTitle";
import Tabs from "@/components/common/tabs";
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
        <div>
          <div className="grid grid-cols-3">
            <div className="relative box-border block px-[12px] mt-[24px]">
              <div className="overflow-hidden relative block">
                <img
                  className="w-full h-auto block box-border"
                  src="project-1.jpg"
                />
                <div className="flex  absolute w-full inset-[0] text-center">
                  <button className="cursor-pointer inset-0 p-0 border-0 m-0 w-full h-full"></button>
                  <div className="absolute bg-black opacity-50 flex flex-col items-center justify-center">
                    <p className="text-c1 text-2xl mb-1 mt-0">
                      Project Details
                    </p>
                    <h5 className="text-white text-lg">Detail Project</h5>
                    <span className="text-white text-sm">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
