import React from 'react'
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const socialLinks = [
  { icon: faTwitter, link: '' },
  { icon: faLinkedinIn, link: '' },
  { icon: faFacebook, link: '' },
  { icon: faGithub, link: '' },
]
type Props = { color?: string }
export default function SocialIcons({ color = 'text-slate-600' }: Props) {
  return (
    <ul className="flex flex-wrap mt-[3rem]">
      {socialLinks.map((item, index) => {
        return (
          <li
            className="my-[2px] mx-[6px] w-[48px] h-[48px]"
            key={`s-${index}`}
          >
            <Link href={item.link} scroll={true} className="">
              <FontAwesomeIcon
                className={`fa-2x ${color} hover:text-sky-800`}
                // style={{ color: color ? color : "#574E53" }}
                icon={item.icon}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
