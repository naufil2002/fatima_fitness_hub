import React from "react";
import { motion } from "framer-motion";
import gymVideo from "../assets/images/gym-video.mp4";
import MainButton from "../components/mainButton";
import { AppContext } from "../App";
import CallToAction from "../components/CallToAction";
import Classes from "./Classes";
import Trainers from "./Trainers";
import Calculator from "./Calculator";

export default function Home() {
  const { homeRef, setHomeVisibility, sectionRefs } =
    React.useContext(AppContext);

  React.useEffect(() => {
    const options = {
      rootMargin: "-80px",
    };
    const navObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHomeVisibility(entry.isIntersecting);
    }, options);
    navObserver.observe(homeRef.current);
  }, []);

  function homeRefsMerged(element) {
    homeRef.current = element;
    sectionRefs.current[0] = element;
  }

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <>
      <section ref={homeRefsMerged} id="home" className="home">
        <video autoPlay loop muted src={gymVideo} className="home--video"></video>
        <div className="container">
          <motion.div
            className="home--caption"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h6>work harder, get stronger</h6>
            <h2>
              easy with our <span className="orange--word">gym</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <MainButton>become a member</MainButton>
          </motion.div>
        </div>
      </section>
      <Classes />
      <Calculator />
      <CallToAction />
      <Trainers />
    </>
  );
}
