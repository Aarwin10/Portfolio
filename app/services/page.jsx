"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse dolor",
    href: "",
  },
  {
    num: "02",
    title: "Web Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse dolor",
    href: "",
  },
  {
    num: "03",
    title: "Dsa Enthusiast",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse dolor",
    href: "",
  },
  {
    num: "04",
    title: "Learning ML",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse dolor",
    href: "",
  },
];

import { easeInOut, motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
          }}
          className="grid grid-cols md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* // top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-2xl text-bold text-primary" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                {/* description */}
                <p className="text-white/75">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
