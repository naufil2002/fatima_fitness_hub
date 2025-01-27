import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importing the hook

function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage("You are Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("You have Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage("You are Overweight");
      } else {
        setMessage("You are Obese");
      }
    } else {
      setBmi(null);
      setMessage("");
    }
  };

  // Intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.3, // When 30% of the element is in the viewport
  });

  return (
    <motion.div
      className="calculator"
      ref={ref} // Applying the ref to track visibility
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }} // Animating based on visibility
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
      >
        BMI Calculator
      </motion.h1>

      <motion.div
        className="input-group"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
      >
        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </motion.div>

      <motion.div
        className="input-group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <label htmlFor="weight">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </motion.div>

      <motion.button
        className="calculate-btn"
        onClick={calculateBmi}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Calculate BMI
      </motion.button>

      {bmi && (
        <motion.div
          className="result"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <p>Your BMI: <strong>{bmi}</strong></p>
          <p>{message}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Calculator;
