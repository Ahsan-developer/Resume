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
    <div id="contact-input" className=" grid w-full box-border mt-[24px]">
      <label className="mb-[.7rem] ">{label}</label>
      {type === "textarea" ? (
        <textarea
          required
          id={id}
          name={name}
          className="bg-transparent  border-b-2 border-0 border-solid border-gray text-black  px-[1rem] text-lg focus:outline-none focus:shadow-none focus:border-black   focus:ring-0 focus:ring-transparent"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className="bg-transparent   border-b-2 border-0 border-solid border-gray   text-black  px-[1rem] text-lg focus:outline-none focus:shadow-none focus:border-black   focus:ring-0 focus:ring-transparent autofill:bg-transparent selection:bg-transparent "
        />
      )}
    </div>
  );
}
