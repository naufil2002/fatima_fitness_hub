import React from "react";
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";
import data from "../services/acheivements.json";
// import { FaFacebookF, FaLinkedinIn, FaBehance } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

export default function Trainers() {
  const { sectionRefs } = React.useContext(AppContext);
  const trainersData = data.trainers;
  const trainersCards = trainersData.map((trainer) => {
    return (
      <div key={trainer.id} className="trainer--card">
        <img
          className="trainer--image"
          src={trainer.image}
          alt={`Image of trainer ${trainer.name}`}
        />
        <div className="trainer--type">{trainer.type}</div>
        <div className="trainer--name">{trainer.name}</div>
        <div className="trainer--details">{trainer.details}</div>
        {/* <div className="trainer--social">
          <span><FaFacebookF className="trainer--facebook"/></span>
          <span><FaXTwitter className="trainer--x"/></span>
          <span><FaLinkedinIn className="trainer--in"/></span>
          <span><FaBehance className="trainer--be"/></span>
        </div> */}
      </div>
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
            OUR <span className="orange--word">ACHEIVEMENTS</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
          We pride ourselves on our success, both in the gym and on the
            competitive stage. Our trainers are champions in their own right,
            having won multiple tournaments in boxing, MMA, and other combat sports.
            Join us and be a part of the winning team!
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="trainers--cards-container">{trainersCards}</div>
      </div>
    </section>
  );
}
