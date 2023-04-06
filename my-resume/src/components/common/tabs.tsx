'use client'
import React from 'react'

type Props = { tabsData: { label: string; value: string }[] }

export default function Tabs({ tabsData }: Props) {
  return (
    <ul className="flex flex-nowrap overflow-hidden overflow-x-auto font-semibold justify-center mb-[48px]">
      {tabsData.map((tab, index) => {
        return (
          <li className="mb-0 hover:cursor-pointer" key={`t-${index}`}>
            <button
              className="transparent border-0 rounded-none relative whitespace-nowrap px-[16px] py-[12px] text-gray-dark hover:text-blue"
              onClick={() => console.log(tab.label)}
            >
              {tab.label}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
