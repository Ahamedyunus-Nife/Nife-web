import { motion } from "framer-motion";

function AnimationTitles({ title, className, duration = 3 }) {
  const hVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration / title.length,
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: duration / title.length,
      },
    },
  };

  return (
    <motion.h2
      variants={hVariants}
      initial="hidden"
      whileInView="visible"
      className={className}
    >
      {title.split("").map((char, index) => (
        <motion.span variants={spanVariants} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default AnimationTitles;
