import React from "react";
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";
import data from "../services/trainers.json";
import { FaFacebookF, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import framer-motion
import { useInView } from "react-intersection-observer"; // Import useInView hook

export default function Trainers() {
  const { sectionRefs } = React.useContext(AppContext);
  const trainersData = data.trainers;

  // Map through trainers data to create cards
  const trainersCards = trainersData.map((trainer) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation only once when it comes into view
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    return (
      <motion.div
        key={trainer.id}
        className="trainer--card"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inView ? 1 : 0, // Animate opacity based on visibility
          y: inView ? 0 : 50, // Animate the vertical position
        }}
        transition={{ duration: 0.6 }}
      >
        <img
          className="trainer--image"
          src={trainer.image}
          alt={`Image of trainer ${trainer.name}`}
        />
        <div className="trainer--type">{trainer.type} trainer</div>
        <div className="trainer--name">{trainer.name}</div>
        <div className="trainer--details">{trainer.details}</div>
        <div className="trainer--social">
          <span><FaFacebookF className="trainer--facebook" /></span>
          <span><FaXTwitter className="trainer--x" /></span>
          <span><FaLinkedinIn className="trainer--in" /></span>
          <span><FaBehance className="trainer--be" /></span>
        </div>
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
          <SectionHeader.Title>
            EXPERT <span className="orange--word">TRAINERS</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="trainers--cards-container">
          {trainersCards}
        </div>
      </div>
    </section>
  );
}
