import SectionTitle from "@/components/common/sectionTitle";
import SummaryCard from "@/components/common/summaryCard";
import React from "react";

export default function ResumePage() {
  return (
    <section id="resume" className="relative pt-[6.5rem] box-border">
      <div className=" w-[80%]  mr-auto ml-auto py-[1.5rem] px-[1.5rem]">
        <SectionTitle name="Resume" desp="A summary of My Resume" />
        <div className="grid grid-cols-2">
          <SummaryCard />
          <SummaryCard />
        </div>
      </div>
    </section>
  );
}
