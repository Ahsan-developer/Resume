import React from 'react'

type Props = {}
const personalInfo = [
  { fieldName: 'Name', value: 'Muhammad Ahsan Riaz' },
  { fieldName: 'Email', value: 'ahsanriaz2466@gmail.com' },
  { fieldName: 'Date of Brith', value: '11 Nov, 1993' },
  { fieldName: 'From', value: 'Islamabad,Pakistan' },
]
export default function PersonalInfoCard({}: Props) {
  return (
    <div className="grid grid-cols-4 ">
      {personalInfo.map((item, index) => {
        return (
          <div
            className=" box-border mt-[16px] leading-[24px]"
            key={`pinfo-${index}`}
          >
            <p className=" font-medium text-gray">{item.fieldName}:</p>
            <p className=" font-semibold text-lg">{item.value} </p>
          </div>
        )
      })}
    </div>
  )
}
