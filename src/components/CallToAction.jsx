// eslint-disable-next-line no-unused-vars
import React from "react";
import MainButton from "./mainButton";

export default function CallToAction() {
  return (
    <div className="callToAction">
      <div className="container">
        <h2>
          <span className="dark-bg--normal-word">don't</span>{" "}
          <span className="orange--word">think</span>,{" "}
          <span className="dark-bg--normal-word">begin</span>{" "}
          <span className="orange--word">today</span>!
        </h2>
        <p>
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
          ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
          nisi luctus imperdiet.
        </p>
        <MainButton>become a member</MainButton>
      </div>
    </div>
  );
}
