import React from "react";

export default function MainButton({ children }) {
  return (
    <a className="main--button" href="#">
      {children}
    </a>
  );
}
