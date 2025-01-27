import React from "react";
import { motion } from "framer-motion";
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";
import data from "../services/acheivements.json";

export default function Trainers() {
  const { sectionRefs } = React.useContext(AppContext);
  const trainersData = data.trainers;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const trainersCards = trainersData.map((trainer) => {
    return (
      <motion.div
        key={trainer.id}
        className="trainer--card"
        variants={cardVariants}
      >
        <img
          className="trainer--image"
          src={trainer.image}
          alt={`Image of trainer ${trainer.name}`}
        />
        <div className="trainer--type">{trainer.type}</div>
        <div className="trainer--name">{trainer.name}</div>
        <div className="trainer--details">{trainer.details}</div>
      </motion.div>
    );
  });

  return (
    <section
      className="trainers"
      id="trainers"
      ref={(element) => (sectionRefs.current[4] = element)}
    >
      <div className="container">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: -30 }} // Start above and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and slide down smoothly
            transition={{ duration: 1, ease: "easeOut" }} // Smooth easing transition
          >
            <SectionHeader.Title>
              OUR <span className="orange--word">ACHEIVEMENTS</span>
            </SectionHeader.Title>
            <SectionHeader.Desc>
              We pride ourselves on our success, both in the gym and on the
              competitive stage. Our trainers are champions in their own right,
              having won multiple tournaments in boxing, MMA, and other combat
              sports. Join us and be a part of the winning team!
            </SectionHeader.Desc>
          </motion.div>
        </SectionHeader>
        <motion.div
          className="trainers--cards-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trainersCards}
        </motion.div>
      </div>
    </section>
  );
}
