import { animate, color, motion } from "framer-motion"


const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate stagger effect
const reverseIndex = (index)=> {
  const totalsteps = 6;
  return totalsteps-index-1;
};

const Stairs = () => {
  return (
    <>
      {/* 6 Motion div for render steps ,each dive same animation effect,delay bsed on
       reverse index,stagger effect animation*/}

      {[...Array(6)].map((_,index)=>{
        return (
          <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
            duration: 0.3,
            ease: 'easeInOut',
            delay: reverseIndex(index)* 0.09,
          }} 
          className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs
