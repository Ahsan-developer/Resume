"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TextField from "./textField";

type Props = { submitCallback: () => void };

export default function EstimateForm({ submitCallback }: Props) {
  return (
    <form id="contact-form" className=" inline m-[0] p-[0] box-border">
      <TextField
        id="name"
        name="user-name"
        type="text"
        required
        label={"What is Your Name:"}
      />
      <TextField
        id="name"
        name="email"
        type="email"
        required
        label={"Your Email Address:"}
      />
      <TextField
        id="help"
        name="help-you"
        type="textarea"
        required
        label={"How can I Help You?"}
      />
      <div className=" text-left mt-[24px] pl-[.5rem] ">
        <button
          onClick={() => submitCallback()}
          id="submit-btn"
          className="bg-black text-white py-[.8rem] px-[2.6rem]"
        >
          Send
          <span className="ml-[1rem]">
            <FontAwesomeIcon icon={faArrowRight} className="origin-center" />
          </span>
        </button>
      </div>
    </form>
  );
}
