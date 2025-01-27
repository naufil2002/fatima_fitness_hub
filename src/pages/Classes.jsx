import React from "react";
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";
import data from "../services/classes.json";
import dumbbell from "../assets/images/tabs-first-icon.png";

export default function Classes() {
  const { sectionRefs } = React.useContext(AppContext);
  // eslint-disable-next-line no-unused-vars
  const [classesData, setClasses] = React.useState(data.trainingClasses);
  const [activeClassId, setActiveClassId] = React.useState(classesData[0].id);

  function chooseClass(id) {
    setActiveClassId(id);
  }
  const classesCards = classesData.map((classItem) => {
    const activeClassStyle = activeClassId === classItem.id ? "active" : "";
    return (
      <div
        key={classItem.id}
        className={`classes--card ${activeClassStyle}`}
        onClick={() => chooseClass(classItem.id)}
      >
        <img src={dumbbell} alt="icon" />
        {classItem.name}
      </div>
    );
  });
  const displayClassesCards = classesCards.slice(0, 4);

  const classesPreview = classesData.map((classItem) => {
    return (
      <div key={classItem.id} id={classItem.id} className="classes--classPreview">
        <div className="classes--class-image">
          <img
            src={classItem.image}
            alt="class--card-img"
            className="classes--img"
          />
        </div>
        <div className="classes--class-name">{classItem.name}</div>
        <div className="classes--class-details">{classItem.details}</div>
        <div className="main--button classes--classPreview-btn">
          view schedule
        </div>
      </div>
    );
  });
  const displayClassesPreview = classesPreview.filter(classItem => {
    return classItem.props.id === activeClassId
  })

  return (
    <section
      ref={(element) => (sectionRefs.current[2] = element)}
      id="classes"
      className="classes"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            OUR <span className="orange--word">CLASSES</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="classes--main">
          <div className="classes--list">
            {displayClassesCards}
            <div className="main--button classes--main-btn">
              view all schedules
            </div>
          </div>
          {displayClassesPreview}
        </div>
      </div>
    </section>
  );
}
