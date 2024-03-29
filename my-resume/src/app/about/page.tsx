import PersonalInfoCard from '@/components/common/personalInfoCard'
import SectionTitle from '@/components/common/sectionTitle'
import React from 'react'

export default function AboutPage() {
  return (
    <section id="about" className=" py-[6.5rem] relative w-full">
      <div className="container">
        <SectionTitle name="About Me" desp="Know Me More" />
        <div className="flex  box-border w-full">
          <div className="w-[70%] px-[12px] visible text-left  block">
            <h2 className=" font-normal text-[2rem] mb-[1rem] mt-0 leading-[1.2]">
              {"Hi, I'm "}
              <span className=" border-c1 font-bold border-b-[3px]">
                {'Muhammad Ahsan Riaz'}
              </span>
            </h2>
            <p className=" block text-left visible w-full text-xl">
              {
                "I'm a designer & developer with a passion for web design and Mobile applications. I enjoy developing simple, clean and slick websites and Apps that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client's requirements is our moto."
              }
            </p>
          </div>
          <div className="w-[30%] visible mt-[1.5rem]">
            <div className=" text-center relative box-border block">
              <div className=" items-center flex h-[120px] justify-center mx-auto mt-0 mb-[1.5rem] text-center w-[120px] rounded-full bg-c1 font-medium">
                <span className=" box-border visible text-[9rem]">{'04'}</span>
              </div>
              <h3 className=" visible font-medium mb-[10px] text-3xl mt-0">
                {'Years of'}
                <span className=" font-bold box-border">{'Experiance'}</span>
              </h3>
            </div>
          </div>
        </div>
        <PersonalInfoCard />
      </div>
    </section>
  )
}
