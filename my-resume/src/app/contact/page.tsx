'use client'
import EstimateForm from '@/components/common/estimateForm'
import SocialIcons from '@/components/common/socialIcons'
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
  return (
    <section id="contact" className=" bg-c1">
      <div className="container">
        <div className="grid grid-cols-2 my-[4rem] ">
          <div className="text-left">
            <h2 className=" font-bold text-4xl mb-[3rem]">
              {"Let's get in touch"}
            </h2>
            <p className=" text-[1.3125rem] mb-[3rem]">
              {
                'I enjoy discussing new projects and design challenges. Please hare as much info, as possible so we can get the most out of our first catch-up.'
              }
            </p>
            <h3 className=" font-bold text-[1.3125rem] mb-[.5rem]">
              {'Living In:'}
            </h3>
            <address className="mb-[1rem] text-[1.125rem]">
              {'House 199-A, street 42, sector G-6/1-3, Islamabad, Pakistan'}
            </address>
            <h3 className=" font-bold text-[1.3125rem] mb-[.5rem]">Call:</h3>
            <p className="mb-[1rem] text-[1.125rem]">
              <a href="tel:+923040553943">{'(+92) 304 055 3943'}</a>
            </p>
            <SocialIcons />
          </div>
          <div className="ml-[5rem]">
            <h2 className=" font-bold text-4xl mb-[3rem] ">
              {'Estimate your Project?'}
            </h2>
            <EstimateForm
              submitCallback={() => {
                alert('submited your request sucessfully')
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
