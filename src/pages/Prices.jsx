import React from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion
import List from "../components/List";
import Text from "../components/Text";
// eslint-disable-next-line no-unused-vars
import Card from "../components/Card";
import { MembershipPlans } from "../services/membership";

const Membership = () => {
  // Animation Variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="membership-section">
      {/* Section Header with smooth fade and slide effect */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -30 }} // Start above and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and slide down smoothly
        transition={{ duration: 1, ease: "easeOut" }} // Smooth easing transition
      >
        <Text as="h1" className="section-title">
          MEMBERSHIP <span>PLANS</span>
        </Text>
      </motion.div>

      {/* Membership Cards */}
      <div className="cards-container">
        {MembershipPlans.cards.map((card, index) => {
          // Use the `useInView` hook to detect when the card is in view
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const ref = React.useRef(null);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const inView = useInView(ref, { threshold: 0.5 });

          return (
            <motion.div
              ref={ref}
              className={`card ${index === 1 ? "highlighted-card" : ""}`}
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
            >
              {/* Price Section */}
              <Text as="h2" className="price-section">
                <span className="price-symbol">$</span>
                <span
                  className={`price-amount ${
                    card.amount === 49 ? "large-price" : ""
                  }`}
                >
                  {card.amount}
                </span>
                <span className="price-duration">/{card.duration}</span>
              </Text>

              {/* Caption */}
              <Text
                as="h3"
                className={`caption ${
                  card.caption.includes("12") ? "highlight-caption" : ""
                }`}
              >
                {card.caption}
              </Text>

              {/* Benefits List */}
              <ul className="benefits-list">
                {card.benefits.map((benefit, idx) => (
                  <List className="benefit" key={idx}>
                    {benefit}
                  </List>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Membership;
