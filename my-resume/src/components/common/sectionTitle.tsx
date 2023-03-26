import React from "react";

type Props = { name: string; desp: string };

export default function SectionTitle({ name, desp }: Props) {
  return (
    <>
      <p className=" visible text-center mb-[0.5rem] leading-[1.8rem] mt-0 block font-normal ">
        <span className=" bg-c1 text-black px-[0.5rem] text-center text-base visible leading-[1.8] w-full">
          {name}
        </span>
      </p>
      <h2 className=" visible font-semibold text-[2.5rem] text-center mb-[3rem] leading[1.8rem]">
        {desp}
      </h2>
    </>
  );
}
