/* eslint-disable react/prop-types */
import React from "react";
import dumbbell from "../assets/images/features-first-icon.png";
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { sectionRefs } = React.useContext(AppContext);

  // Animation for each card
  const AboutCard = ({ title, description }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    return (
      <motion.div
        className="about--card"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
        }}
        transition={{ duration: 0.6 }}
      >
        <img className="about--card-img" src={dumbbell} alt="dumbbell" />
        <div className="about--card-content">
          <div className="card--title">{title}</div>
          <div className="card--desc">{description}</div>
          <a href="#">discover more</a>
        </div>
      </motion.div>
    );
  };

  // Animation for each detail section
  const DetailItem = ({ title, description }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 30,
        }}
        transition={{ duration: 0.6 }}
        className="about--detail-item"
      >
        <h2 className="about--details-title">{title}</h2>
        <p className="about--details-desc">{description}</p>
      </motion.div>
    );
  };

  return (
    <section
      ref={(element) => (sectionRefs.current[1] = element)}
      id="about"
      className="about"
    >
      <div className="container">
        {/* Section Header with smoother animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }} // Start above and invisible
          animate={{ opacity: 1, y: 0 }} // Fade in and slide down smoothly
          transition={{ duration: 1, ease: "easeOut" }} // Smooth easing transition
        >
          <SectionHeader>
            <SectionHeader.Title>
              choose <span className="">program</span>
            </SectionHeader.Title>
            <SectionHeader.Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              incidunt blanditiis autem at alias earum nobis ad eos doloremque
              quod totam, culpa sapiente quam harum provident dolores aliquid
              voluptatum dolor.
            </SectionHeader.Desc>
          </SectionHeader>
        </motion.div>

        {/* Cards */}
        <div className="about--card-container">
          <AboutCard
            title="Basic Fitness"
            description="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
          />
          <AboutCard
            title="Advanced Muscle Course"
            description="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
          />
          <AboutCard
            title="New Gym Training"
            description="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
          />
          <AboutCard
            title="Yoga Training"
            description="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
          />
          <AboutCard
            title="Basic Muscle Course"
            description="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
          />
          <AboutCard
            title="Body Building Course"
            description="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
          />
        </div>

        {/* Details Section */}
        <div className="about--details">
          <DetailItem
            title="Why Choose Us?"
            description="At our gym, we are dedicated to helping you achieve your fitness goals. Whether you're looking to lose weight, build muscle, or increase your flexibility, we provide personalized fitness plans and expert guidance to help you succeed. Our modern equipment, supportive environment, and experienced trainers make us the perfect choice for anyone looking to improve their health and fitness."
          />
          <DetailItem
            title="Our Facilities"
            description="Our state-of-the-art facilities include a wide range of cardio and strength equipment, as well as dedicated areas for yoga, stretching, and functional training. We also offer shower facilities, lockers, and a clean, welcoming atmosphere to ensure you have the best experience during your workouts."
          />
          <DetailItem
            title="Membership Plans"
            description="We offer flexible membership plans to fit your needs. Whether you're looking for a short-term commitment or a long-term fitness journey, we have a plan that works for you. All of our memberships include access to all gym facilities, group classes, and personal training sessions."
          />
          <DetailItem
            title="Expert Trainers"
            description="Our certified trainers are dedicated to helping you reach your fitness goals. They are experienced in creating customized workout programs, providing nutritional guidance, and ensuring you perform exercises safely and effectively. With their expert advice and support, you'll feel motivated and confident on your fitness journey."
          />
        </div>
      </div>
    </section>
  );
}
