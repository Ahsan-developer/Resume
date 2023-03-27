import React from "react";

type Props = {
  title: string;
  data: { label: string; desp: string; detail: string }[];
};

export default function ({ title, data }: Props) {
  return (
    <div className="mt-[3rem] w-full px-[24px] font-normal">
      <h2 className=" font-semibold text-3xl pb-[0.5rem] mb-[1.5rem]">
        {title}
      </h2>
      {data.map((item, index) => {
        return (
          <div className=" border-c1 pl-[1rem] border-l-2">
            <div>
              <h3 className=" text-[24px] font-medium mt-0 mb-[0.5rem] ">
                {item.label}
              </h3>
              <p className="mb-[0.5rem]">{item.desp}</p>
              <p className="mb-[1rem] text-gray ">{item.detail}</p>
              <hr className="my-[1.5rem]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
