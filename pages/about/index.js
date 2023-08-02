import React, { useState } from "react"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import CountUp from "react-countup"
//  data
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiFramer } from 'react-icons/si'
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles"

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,

        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Civil Engineering (B-Tech) - JISCE -  WB, India',
        stage: '2020 - 2023',
      },
      {
        title: 'Civil Engineering (Diploma) - G.I.S.T - WB, India',
        stage: '2017 - 2020',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0)

  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/*  Avater image*/}
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute bottom-0 -left-[370px] ">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-4 ">
      {/* Text */}
      <div className="flex-1 flex flex-col justify-center ">
        <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit='hidden' className="h2">Captivating <span className="text-accent">stories</span> birth magnification design.</motion.h2>
        <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit='hidden' className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">1 month ago, I began freelancing as a front-end developer.</motion.p>
        {/* Counters */}
        <motion.div variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit='hidden' className="hidden md:flex md:max-x-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-4 my-6">
            {/* experience */}
            <div  className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={1} duration={5} /> +
              </div>
              <div className="txt-xs uppercase tracking-[1px] leading-[1.4] mx-w-[100px]">Month of experience</div>
            </div>

            {/* Clients */}

            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={1} duration={5} /> +
              </div>
              <div className="txt-xs uppercase tracking-[1px] leading-[1.4] mx-w-[100px]">Satisfied clients</div>
            </div>

            {/* Finish projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={1} duration={5} /> +
              </div>
              <div className="txt-xs uppercase tracking-[1px] leading-[1.4] mx-w-[100px]">Finished projects</div>
            </div>


          </div>
        </motion.div>
      </div>
      {/* Info */}
      <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className="flex flex-col w-full xl:max-w-[48%] h-[480px]">

        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-500'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-[1px] after:left-0  hover:text-accent hover:after:transition-all hover:after:duration-500 hover:after:bg-accent hover:after:w-[100%]`} onClick={() => setIndex(itemIndex)}>{item.title}
              </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 ">
                {/* Title */}
                <div>{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className="text-2xl hover:text-white">{icon}</div>
                  })}

                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
