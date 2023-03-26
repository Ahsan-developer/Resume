import {
  faBullhorn,
  faChartArea,
  faDesktop,
  faPaintBrush,
  faPalette,
  faPallet,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { type } from "os";
import React from "react";

type Props = {};
type skillDataType = { title: string; icon: JSX.Element; description: string };
const skillData: Array<skillDataType> = [
  {
    title: "Graphic Design",
    icon: (
      <FontAwesomeIcon
        icon={faPalette}
        className="origin-center h-[55px] w-[55px] mb-[0.8rem]"
      />
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    title: "Web Design",
    icon: (
      <FontAwesomeIcon
        icon={faDesktop}
        className="origin-center h-[55px] w-[55px] mb-[0.8rem]"
      />
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    title: "UI/UX Design",
    icon: (
      <FontAwesomeIcon
        icon={faPencilRuler}
        className="origin-center h-[55px] w-[55px] mb-[0.8rem]"
      />
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    title: "APP Design & Develop",
    icon: (
      <FontAwesomeIcon
        icon={faPaintBrush}
        className="origin-center h-[55px] w-[55px] mb-[0.8rem]"
      />
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    title: "Business Analysis",
    icon: (
      <FontAwesomeIcon
        icon={faChartArea}
        className="origin-center h-[55px] w-[55px] mb-[0.8rem]"
      />
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    title: "SEO Marketing",
    icon: (
      <FontAwesomeIcon
        icon={faBullhorn}
        className="origin-center h-[55px] w-[55px] mb-[0.8rem]"
      />
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
];
export default function SkillCard({}: Props) {
  return (
    <div className="grid grid-cols-3">
      {skillData.map((skill, index) => {
        return (
          <div className=" mt-[3rem] font-normal px-[12px]">
            <div className="relative px-[1.5rem] text-center ">
              <div className=" text-c1">{skill.icon}</div>
              <h3 className=" font-semibold text-2xl mb-[1rem]">
                {skill.title}
              </h3>
              <p className=" text-gray leading-[28px] text-center font-normal text-base">
                {skill.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
