import ProfileClass from "./ProfileClass";

//about component
const About = () => {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="about-page-section">
            <div className="section-heading">
              <h2>
                <span>Why customer choose Us </span>
              </h2>
            </div>
            <p>
              Eating a healthy diet that includes lots of fruit, vegetables,
              whole grains and a moderate amount of unsaturated fats, meat and
              dairy can help you maintain a steady weight. Having a good variety
              of these foods every day leaves less room for foods that are high
              in fat and sugar - a leading cause of weight gain.
            </p>
            <p>
              Together with exercise, eating a healthy diet in the right
              proportions can also help you lose weight, lower your cholesterol
              levels and blood pressure and decrease your risk of type 2
              diabetes.
            </p>
          </div>
        </div>
      </div>
      <div className="profile-wrap">
        <ProfileClass />
      </div>
    </>
  );
};

export default About;
