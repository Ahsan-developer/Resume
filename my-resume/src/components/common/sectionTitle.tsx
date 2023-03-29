import React from "react";

type Props = {
  name: string;
  desp: string;
  align?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
};

export default function SectionTitle({ name, desp, align }: Props) {
  return (
    <div className=" text-left">
      <p
        className=" visible  mb-[0.5rem] leading-[1.8rem] mt-0 block font-normal "
        style={{ textAlign: align ? align : "center" }}
      >
        <span className=" bg-c1 text-black px-[0.5rem] text-base visible leading-[1.8] w-full">
          {name}
        </span>
      </p>
      <h2
        className=" visible font-semibold text-[2.5rem]  mb-[3rem] leading[1.8rem]"
        style={{ textAlign: align ? align : "center" }}
      >
        {desp}
      </h2>
    </div>
  );
}
