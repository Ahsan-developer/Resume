import ProgressBar from '@/components/common/progressBar'
import SectionTitle from '@/components/common/sectionTitle'
import SummaryCard from '@/components/common/summaryCard'
import Link from 'next/link'
import React from 'react'

const educationData = [
  {
    label: 'Master in Computer Science',
    desp: 'PMAS ARID University / 2016 - 2018',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.',
  },
]

const experienceData = [
  {
    label: 'Software Engineer',
    desp: 'Iplex / 2022 - current',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.',
  },
]
const skillProgressData = [
  { label: 'Web Design', value: '80%' },
  { label: 'HTML/CSS', value: '80%' },
  { label: 'JavaScript', value: '90%' },
  { label: 'React JS', value: '80%' },
  { label: 'TailWind', value: '50%' },
  { label: 'Vue JS', value: '50%' },
]
export default function ResumePage() {
  return (
    <section id="resume" className="relative pt-[6.5rem] box-border">
      <div className="container">
        <SectionTitle name="Resume" desp="A summary of My Resume" />
        <div className="grid grid-cols-2">
          <SummaryCard title="My Education" data={educationData} />
          <SummaryCard title="My Experience" data={experienceData} />
        </div>
        <h2 className=" font-semibold text-3xl mt-[3rem] mb-[1.5rem] pb-[0.5rem]">
          {'My Skills'}
        </h2>
        <div className="grid grid-cols-2">
          {skillProgressData.map((item, index) => {
            return (
              <ProgressBar
                key={`pba-${index}`}
                label={item.label}
                value={item.value}
              />
            )
          })}
        </div>
        <p className="mt-[3rem] text-center mb-[1rem] ">
          <Link
            className=" border-2 font-medium py-[.8rem] px-[2.6rem]"
            href="#"
          >
            {'Download CV'}
          </Link>
        </p>
      </div>
    </section>
  )
}
