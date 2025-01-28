import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import data from "../services/schedules.json";

export default function Schedules() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Runs only once when the component mounts
  const { sectionRefs, isBigWindow } = React.useContext(AppContext);

  const [open, setOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState({
    day: "monday",
    no: 0,
  });

  const schedulesData = data.schedules;
  const trainingClasses = [
    { title: "fitness class", trainer: "william g. stewart" },
    { title: "muscle training", trainer: "paul d. newman" },
    { title: "body building", trainer: "boyd c. harris" },
    { title: "yoga training class", trainer: "hector t. daigle" },
    { title: "advanced training", trainer: "bret d. bowers" },
  ];

  const handleDropdown = () => setOpen((prev) => !prev);

  const handleSelectedDay = (event, id) => {
    const { value } = event.target;
    setSelectedDay({ day: value, no: id });
    setOpen(false);
  };

  const dropdownArrow = open ? <IoIosArrowUp /> : <IoIosArrowDown />;
  const dropdownStyles = { display: open || isBigWindow ? "flex" : "none" };

  const timetable = schedulesData.map((daySchedule) =>
    trainingClasses.map((trainingClass) => {
      const isAvailable = daySchedule.classes.some(
        (availableClass) => availableClass.title === trainingClass.title
      );

      if (isAvailable) {
        return daySchedule.classes.map((availableClass) => {
          if (availableClass.title === trainingClass.title) {
            return (
              <motion.div
                key={`${daySchedule.day}-${availableClass.title}`}
                className="timetable--classContent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="timetable--classTitle">
                  {availableClass.title}
                </div>
                <div className="timetable--morning">
                  {availableClass.morning
                    ? `${availableClass.morning.start} - ${availableClass.morning.end}`
                    : "-"}
                </div>
                <div className="timetable--evening">
                  {availableClass.evening
                    ? `${availableClass.evening.start} - ${availableClass.evening.end}`
                    : "-"}
                </div>
                <div className="timetable--trainer">
                  {availableClass.trainer}
                </div>
              </motion.div>
            );
          }
        });
      } else {
        return (
          <motion.div
            key={`${daySchedule.day}-${trainingClass.title}`}
            className="timetable--classContent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timetable--classTitle">{trainingClass.title}</div>
            <div className="timetable--morning">-</div>
            <div className="timetable--evening">-</div>
            <div className="timetable--trainer">{trainingClass.trainer}</div>
          </motion.div>
        );
      }
    })
  );

  return (
    <section
      className="schedules"
      ref={(element) => (sectionRefs.current[3] = element)}
      id="schedules"
    >
      <div className="container">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: -30 }} // Start above and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and slide down smoothly
            transition={{ duration: 1, ease: "easeOut" }} // Smooth easing transition
          >
            <SectionHeader.Title>
              <span className="dark-bg--normal-word">CLASSES</span>{" "}
              <span className="orange--word">SCHEDULE</span>
            </SectionHeader.Title>
            <SectionHeader.Desc>
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra ipsum dolor, ultricies fermentum massa consequat eu.
            </SectionHeader.Desc>
          </motion.div>
        </SectionHeader>

        <div className="schedules--main">
          {/* Day Selector */}
          <div className="schedules--days-filter">
            {!isBigWindow && (
              <button
                className="schedules--select-button main--button"
                onClick={handleDropdown}
              >
                <span className="schedules--select-value">
                  {selectedDay.day}
                </span>
                <span className="schedules--select-arrow">{dropdownArrow}</span>
              </button>
            )}

            <ul
              style={dropdownStyles}
              className="schedules--days-list schedules--dropdown-menu"
            >
              {schedulesData.map((schedule, index) => (
                <React.Fragment key={schedule.day}>
                  <li className="schedules--day-item">
                    <input
                      type="radio"
                      id={schedule.day}
                      name="day"
                      value={schedule.day}
                      onChange={(event) => handleSelectedDay(event, index)}
                      checked={selectedDay.day === schedule.day}
                    />
                    <label htmlFor={schedule.day}>{schedule.day}</label>
                  </li>
                  {index < schedulesData.length - 1 && (
                    <div className="schedules--day-separator">/</div>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Timetable */}
          <div className="schedules--timetable">
            {timetable[selectedDay.no]}
          </div>
        </div>
      </div>
    </section>
  );
}
