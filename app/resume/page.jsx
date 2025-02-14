"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { easeIn, motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magni itaque quidem velit!",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "N.Aarwin",
    },
    {
      fieldname: "Phone",
      fieldvalue: "(+91) 82873 37079",
    },
    {
      fieldname: "Experience",
      fieldvalue: "2+ years",
    },
    {
      fieldname: "Skype",
      fieldvalue: "z.y.x",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Indian",
    },
    {
      fieldname: "Email",
      fieldvalue: "kurokatana42@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldvalue: "Available",
    },
    {
      fieldname: "Languages",
      fieldvalue: "English, Hindi",
    },
  ],
};

const experience = {
  icons: "/assets/props/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magni itaque quidem velit!",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Webdeveloper",
      duration: "20xx-20xx",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "20xx-20xx",
    },
    {
      company: "E-Commerce Startup",
      position: "Freelance Web Developer",
      duration: "20xx-20xx",
    },
    {
      company: "Coding Academy",
      position: "Teaching Assistant",
      duration: "20xx-20xx",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "20xx-20xx",
    },
    {
      company: "Harvesting ML-Startup",
      position: "Ml-Engineer",
      duration: "20xx-20xx",
    },
  ],
};

const education = {
  icons: "/assets/props/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magni itaque quidem velit!",
  items: [
    {
      institution: "Online Course Platform",
      certification: "Full Stack Web Development Bootcamp",
      duration: "20xx",
    },
    {
      institution: "Codecademy",
      certification: "Front-End Track",
      duration: "20xx",
    },
    {
      institution: "Online Course",
      certification: "Programming Course",
      duration: "20xx-20xx",
    },
    {
      institution: "Tech Institute",
      certification: "Certified Web Developer",
      duration: "20xx",
    },
    {
      institution: "A.B.C School",
      certification: "10th & 12th Certificate",
      duration: "20xx-20xx",
    },
    {
      institution: "A.B.C College",
      certification: "x.y.z Course Graduation Degree",
      duration: "20xx-20xx",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magni itaque quidem velit!",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className="min-h-[70vh] w-full">
            
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-5xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-scroll">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="h-[184px] bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-5xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-scroll">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="h-[184px] bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60] text-center lg:text-left">
                            {item.certification}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-28 xl:h-40 bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl xl:text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className=" capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className=" flex flex-col gap-8">
                <h3 className=" text-4xl font-bold ">{about.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0" >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="text-xl">{item.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
