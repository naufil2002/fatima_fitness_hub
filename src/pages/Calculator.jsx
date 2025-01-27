// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import "./index.css"; // Add this for custom CSS

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

  return (
    <div className="calculator">
      <h1 className="title">BMI Calculator</h1>
      
      <div className="input-group">
        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="weight">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button className="calculate-btn" onClick={calculateBmi}>
        Calculate BMI
      </button>

      {bmi && (
        <div className="result">
          <p>Your BMI: <strong>{bmi}</strong></p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
