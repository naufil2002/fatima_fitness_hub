import React from "react";
import gymVideo from "../assets/images/gym-video.mp4";
import MainButton from "../components/mainButton";
import { AppContext } from "../App";
import CallToAction from "../components/CallToAction";
import Classes from "./Classes";
import Trainers from "./Trainers"
import Calculator from "./Calculator";

export default function Home() {
  const { homeRef, setHomeVisibility, sectionRefs } =
    React.useContext(AppContext);
  React.useEffect(() => {
    const options = {
      rootMargin: "-80px",
    };
    const navObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHomeVisibility(entry.isIntersecting);
    }, options);
    navObserver.observe(homeRef.current);
  }, []);

  function homeRefsMerged(element) {
    homeRef.current = element;
    sectionRefs.current[0] = element;
  }

  return (
    <>
    <section ref={homeRefsMerged} id="home" className="home">
      <video autoPlay loop muted src={gymVideo} className="home--video"></video>
      <div className="container">
        <div className="home--caption">
          <h6>work harder, get stronger</h6>
          <h2>
            easy with our <span className="orange--word">gym</span>
          </h2>
        </div>
        <MainButton>become a member</MainButton>
      </div>
    </section>
      {/* <CallToAction /> */}
      <Classes />
      <Calculator />
       <CallToAction />
      <Trainers />
      </>
  );
}
