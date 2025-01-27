import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { useInView } from "react-intersection-observer"; // Import useInView hook
import MainButton from "./mainButton";

export default function CallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <motion.div
      className="callToAction"
      ref={ref} // Attach ref to the element
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0, // Animate based on whether the section is in view
        y: inView ? 0 : 50,
      }}
      transition={{ duration: 0.8 }} // Smooth animation when section comes into view
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: inView ? 1 : 0,
            x: inView ? 0 : -50,
          }}
          transition={{ duration: 0.6 }}
        >
          <span className="dark-bg--normal-word">don't</span>{" "}
          <span className="orange--word">think</span>,{" "}
          <span className="dark-bg--normal-word">begin</span>{" "}
          <span className="orange--word">today</span>!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 20,
          }}
          transition={{ duration: 0.7 }}
        >
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
          ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
          nisi luctus imperdiet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <MainButton>become a member</MainButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
