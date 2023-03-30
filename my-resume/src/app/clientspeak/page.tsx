"use client";
import SectionTitle from "@/components/common/sectionTitle";
import { Carousel } from "flowbite-react";
import React from "react";

export default function ClientSpeakPage() {
  return (
    <section id="testimonial" className="bg-gray-100 py-[6.5rem] ">
      <SectionTitle
        name={"Client Speak"}
        desp={"What Some of my Clients Say"}
        color="white"
      />
      <div className="container">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
          <Carousel slide={false}>
            <div>
              <div
                className=" text-center px-[12rem] box-border"
                tabIndex={-1}
                style={{ width: "100%", display: "inlineBlock" }}
              >
                <p className="text-[1.3125rem] mb-[1rem]  text-center text-white">
                  {" "}
                  “I am happy Working with printing and typesetting industry.
                  Quidam lisque persius interesset his et, in quot quidam
                  persequeris essent possim iriure. simply dummy text of the
                  printing and typesetting industry.”
                </p>
                <div>
                  <img
                    className="w-auto inline-block rounded-full shadow"
                    src="client-sm-2.jpg"
                    alt="Patrick Cary"
                  />
                </div>
                <strong className="d-block text-3 fw-600 text-white">
                  Patrick Cary
                </strong>
                <span className="text-light">Freelancer from USA</span>
              </div>
            </div>
            <div>
              <div
                className=" text-center px-[12rem] box-border"
                tabIndex={-1}
                style={{ width: "100%", display: "inlineBlock" }}
              >
                <p className="text-[1.3125rem] mb-[1rem]  text-center text-white">
                  {" "}
                  “I am happy Working with printing and typesetting industry.
                  Quidam lisque persius interesset his et, in quot quidam
                  persequeris essent possim iriure. simply dummy text of the
                  printing and typesetting industry.”
                </p>
                <div>
                  <img
                    className="w-auto inline-block rounded-full shadow"
                    src="client-sm-2.jpg"
                    alt="Patrick Cary"
                  />
                </div>
                <strong className="d-block text-3 fw-600 text-white">
                  Patrick Cary
                </strong>
                <span className="text-light">Freelancer from USA</span>
              </div>
            </div>
            <div>
              <div
                className=" text-center px-[12rem] box-border"
                tabIndex={-1}
                style={{ width: "100%", display: "inlineBlock" }}
              >
                <p className="text-[1.3125rem] mb-[1rem]  text-center text-white">
                  {" "}
                  “I am happy Working with printing and typesetting industry.
                  Quidam lisque persius interesset his et, in quot quidam
                  persequeris essent possim iriure. simply dummy text of the
                  printing and typesetting industry.”
                </p>
                <div>
                  <img
                    className="w-auto inline-block rounded-full shadow"
                    src="client-sm-2.jpg"
                    alt="Patrick Cary"
                  />
                </div>
                <strong className="d-block text-3 fw-600 text-white">
                  Patrick Cary
                </strong>
                <span className="text-light">Freelancer from USA</span>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
