"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}>
          {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.9, duration: 0.4, ease: "easeInOut" },
          }}
         className="absolute w-[250px] h-[250px] xl:w-[400px] left-[3vw] top-[3vh] xl:h-[400px]  xl:left-[2.2vw] xl:top-[5vh] rounded-b-2xl mix-blend-lighten ">
          <Image
            src="/assets/myphoto.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>

        {/* Circle  */}

        <motion.svg
        className="w-[280px] xl:w-[460px] h-[280px] xl:h-[460px] relative"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg">  
          <motion.circle 
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{strokeDasharray: "24 10 0 0"}}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120,360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          />
        </motion.svg>

      </motion.div>
    </div>
  );
};

export default Photo;
