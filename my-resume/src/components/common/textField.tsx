import React from "react";

type Props = {
  id: string;
  label: string;
  name: string;
  type: string;
  required: boolean;
};

export default function TextField({ id, label, name, type, required }: Props) {
  return (
    <div className=" grid w-full box-border mt-[24px]">
      <label className="mb-[.7rem] ">{label}</label>
      {type === "textarea" ? (
        <textarea
          required
          id={id}
          name={name}
          className="bg-transparent  border-b-2 border-solid border-l-gray-light text-black  px-[1rem] text-lg focus:outline-none"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className="bg-transparent  border-b-2 border-solid border-l-gray-light text-black  px-[1rem] text-lg focus:outline-none"
        />
      )}
    </div>
  );
}
