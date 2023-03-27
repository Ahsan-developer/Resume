import React from "react";

type Props = { label: string; value: string };

export default function ProgressBar({ label, value }: Props) {
  return (
    <div className="px-[24px]">
      <p className=" font-medium text-left mb-[.5rem] text-base">
        {label}
        <span className=" float-right">{value}</span>
      </p>
      <div className="w-full bg-gray-light rounded-full h-[.7rem] mb-[1.5rem] dark:bg-gray-700">
        <div
          className="bg-c1 h-[.7rem] rounded-full dark:bg-blue-500 w-2/4"
          style={{ width: `${value}` }}
        ></div>
      </div>
    </div>
  );
}
