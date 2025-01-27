import React from "react";
import { motion } from "framer-motion";
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";
import data from "../services/classes.json";
import dumbbell from "../assets/images/tabs-first-icon.png";

const Classes = () => {
  const { sectionRefs } = React.useContext(AppContext);

  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [classesData] = React.useState(data.trainingClasses);
  const [activeClassId, setActiveClassId] = React.useState(classesData[0].id);

  function chooseClass(id) {
    setActiveClassId(id);
  }

  const classesCards = classesData.map((classItem) => {
    const activeClassStyle = activeClassId === classItem.id ? "active" : "";
    return (
      <motion.div
        key={classItem.id}
        className={`classes--card ${activeClassStyle}`}
        onClick={() => chooseClass(classItem.id)}
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={dumbbell} alt="icon" />
        {classItem.name}
      </motion.div>
    );
  });

  const displayClassesCards = classesCards.slice(0, 4);

  const classesPreview = classesData.map((classItem) => {
    return (
      <motion.div
        key={classItem.id}
        id={classItem.id}
        className="classes--classPreview"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="classes--class-image">
          <img
            src={classItem.image}
            alt="class--card-img"
            className="classes--img"
          />
        </div>
        <div className="classes--class-name">{classItem.name}</div>
        <div className="classes--class-details">{classItem.details}</div>
        <motion.div
          className="main--button classes--classPreview-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          view schedule
        </motion.div>
      </motion.div>
    );
  });

  const displayClassesPreview = classesPreview.filter((classItem) => {
    return classItem.props.id === activeClassId;
  });

  return (
    <motion.section
      ref={(element) => (sectionRefs.current[2] = element)}
      id="classes"
      className="classes"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <SectionHeader>
          <motion.div variants={titleVariant}>
            <SectionHeader.Title>
              OUR <span className="orange--word">CLASSES</span>
            </SectionHeader.Title>
            <SectionHeader.Desc>
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra ipsum dolor, ultricies fermentum massa consequat eu.
            </SectionHeader.Desc>
          </motion.div>
        </SectionHeader>
        <div className="classes--main">
          <motion.div
            className="classes--list"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {displayClassesCards}
            <motion.div
              className="main--button classes--main-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              view all schedules
            </motion.div>
          </motion.div>
          {displayClassesPreview}
        </div>
      </div>
    </motion.section>
  );
};

export default Classes;
