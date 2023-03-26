import SectionTitle from "@/components/common/sectionTitle";
import SkillCard from "@/components/common/skillCard";
import { faPallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  return (
    <section id="services" className="relative p-[6.5rem] box-border">
      <div>
        <SectionTitle
          name="What I DO?"
          desp="How I can help your next project"
        />
        <SkillCard />
      </div>
    </section>
  );
}
