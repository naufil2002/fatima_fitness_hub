import React from "react";
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import data from "../services/schedules.json";

export default function Schedules() {
  const { sectionRefs, isBigWindow } = React.useContext(AppContext);

  const [open, setOpen] = React.useState(false);
  function handleDropdown() {
    setOpen((prevOpen) => !prevOpen);
  }
  const dropdownStyles = {
    display: open || isBigWindow ? "flex" : "none",
  };
  const dropdownArrow = open ? <IoIosArrowUp /> : <IoIosArrowDown />;

  const [selectedDay, setSelectedDay] = React.useState({
    day: "monday",
    no: 0,
  });

  function handleSelectedDay(event, id) {
    const { name, value } = event.target;
    setSelectedDay({
      [name]: value,
      no: id,
    });
    setOpen((prevOpen) => !prevOpen);
  }

  const schedulesData = data.schedules;
  const trainingClasses = [
    { title: "fitness class", trainer: "william g. stewart" },
    { title: "muscle training", trainer: "paul d. newman" },
    { title: "body building", trainer: "boyd c. harris" },
    { title: "yoga training class", trainer: "hector t. daigle" },
    { title: "advanced training", trainer: "bret d. bowers" },
  ];
  const timetable = schedulesData.map((daySchedule) => {
    return trainingClasses.map((trainingClass) => {
      const isAvailable = daySchedule.classes.some(
        (availableClass) => availableClass.title === trainingClass.title
      );
      if (isAvailable) {
        return daySchedule.classes.map((availableClass) => {
          if (availableClass.title === trainingClass.title) {
            return (
              <div
                key={`${daySchedule.day}-${availableClass.title}`}
                className="timetable--classContent"
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
              </div>
            );
          }
        });
      } else {
        return (
          <div
            key={`${daySchedule.day}-${trainingClass.title}`}
            className="timetable--classContent"
          >
            <div className="timetable--classTitle">{trainingClass.title}</div>
            <div className="timetable--morning">-</div>
            <div className="timetable--evening">-</div>
            <div className="timetable--trainer">{trainingClass.trainer}</div>
          </div>
        );
      }
    });
  });

  return (
    <section
      className="schedules"
      ref={(element) => (sectionRefs.current[3] = element)}
      id="schedules"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            <span className="dark-bg--normal-word">CLASSES</span>{" "}
            <span className="orange--word">SCHEDULE</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="schedules--main">
          <div className="schedules--days-filter">
            {!isBigWindow && (
              <button
                className="schedules--select-button main--button"
                onClick={handleDropdown}
              >
                <span className="schedules--select-value">{selectedDay.day}</span>
                <span className="schedules--select-arrow">{dropdownArrow}</span>
              </button>
            )}
            <ul
              style={dropdownStyles}
              className="schedules--days-list schedules--dropdown-menu"
            >
              <li className="schedules--day-item">
                <input
                  type="radio"
                  id="monday"
                  name="day"
                  value="monday"
                  onChange={(event) => handleSelectedDay(event, 0)}
                  checked={selectedDay.day === "monday"}
                />
                <label htmlFor="monday">monday</label>
              </li>
              <div className="schedules--day-separator">/</div>
              <li className="schedules--day-item">
                <input
                  type="radio"
                  id="tuesday"
                  name="day"
                  value="tuesday"
                  onChange={(event) => handleSelectedDay(event, 1)}
                  checked={selectedDay.day === "tuesday"}
                />
                <label htmlFor="tuesday">tuesday</label>
              </li>
              <div className="schedules--day-separator">/</div>
              <li className="schedules--day-item">
                <input
                  type="radio"
                  id="wednesday"
                  name="day"
                  value="wednesday"
                  onChange={(event) => handleSelectedDay(event, 2)}
                  checked={selectedDay.day === "wednesday"}
                />
                <label htmlFor="wednesday">wednesday</label>
              </li>
              <div className="schedules--day-separator">/</div>
              <li className="schedules--day-item">
                <input
                  type="radio"
                  id="thursday"
                  name="day"
                  value="thursday"
                  onChange={(event) => handleSelectedDay(event, 3)}
                  checked={selectedDay.day === "thursday"}
                />
                <label htmlFor="thursday">thursday</label>
              </li>
              <div className="schedules--day-separator">/</div>
              <li className="schedules--day-item">
                <input
                  type="radio"
                  id="friday"
                  name="day"
                  value="friday"
                  onChange={(event) => handleSelectedDay(event, 4)}
                  checked={selectedDay.day === "friday"}
                />
                <label htmlFor="friday">friday</label>
              </li>
            </ul>
          </div>
          <div className="schedules--timetable">
            {timetable[selectedDay.no]}
          </div>
        </div>
      </div>
    </section>
  );
}
