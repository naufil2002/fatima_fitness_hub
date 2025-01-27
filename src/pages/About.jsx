import React from "react";
import dumbbell from "../assets/images/features-first-icon.png";
import { AppContext } from "../App";
import SectionHeader from "../components/SectionHeader/index";

export default function About() {
  const { sectionRefs } = React.useContext(AppContext);

  return (
    <section
      ref={(element) => (sectionRefs.current[1] = element)}
      id="about"
      className="about"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            choose <span className="orange--word">program</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            incidunt blanditiis autem at alias earum nobis ad eos doloremque
            quod totam, culpa sapiente quam harum provident dolores aliquid
            voluptatum dolor.
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="about--card-container">
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Basic Fitness</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Advanced Muscle Course</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">New Gym Training</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Yoga Training</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Basic Muscle Course</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Body Building Course</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="about--details">
          <h2 className="about--details-title">Why Choose Us?</h2>
          <p className="about--details-desc">
            At our gym, we are dedicated to helping you achieve your fitness goals. Whether you're looking to lose weight, build muscle, or increase your flexibility, we provide personalized fitness plans and expert guidance to help you succeed. Our modern equipment, supportive environment, and experienced trainers make us the perfect choice for anyone looking to improve their health and fitness.
          </p>

          <h2 className="about--details-title">Our Facilities</h2>
          <p className="about--details-desc">
            Our state-of-the-art facilities include a wide range of cardio and strength equipment, as well as dedicated areas for yoga, stretching, and functional training. We also offer shower facilities, lockers, and a clean, welcoming atmosphere to ensure you have the best experience during your workouts.
          </p>

          <h2 className="about--details-title">Membership Plans</h2>
          <p className="about--details-desc">
            We offer flexible membership plans to fit your needs. Whether you're looking for a short-term commitment or a long-term fitness journey, we have a plan that works for you. All of our memberships include access to all gym facilities, group classes, and personal training sessions.
          </p>

          <h2 className="about--details-title">Expert Trainers</h2>
          <p className="about--details-desc">
            Our certified trainers are dedicated to helping you reach your fitness goals. They are experienced in creating customized workout programs, providing nutritional guidance, and ensuring you perform exercises safely and effectively. With their expert advice and support, you'll feel motivated and confident on your fitness journey.
          </p>
        </div>
      </div>
    </section>
  );
}
