import { BsCheck2All } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import aboutImg from "../assets/images/health-bottle-cut.jpeg";
import testimonialBg from "../assets/images/testimonials-bg.png";

//about component
const AboutComponent = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="cols col-1">
            <div className="about-details">
              <div className="section-heading">
                <h2>
                  <span>
                    Healthy and <br /> tasty foods{" "}
                  </span>{" "}
                  <IoFastFoodOutline
                    stroke="#da2424"
                    fill="#da2424"
                    size={80}
                  />
                </h2>
              </div>
              <p>
                Eating a healthy diet that includes lots of fruit, vegetables,
                whole grains and a moderate amount of unsaturated fats, meat and
                dairy can help you maintain a steady weight. Having a good
                variety of these foods every day leaves less room for foods that
                are high in fat and sugar - a leading cause of weight gain.
              </p>
              <p>
                Together with exercise, eating a healthy diet in the right
                proportions can also help you lose weight, lower your
                cholesterol levels and blood pressure and decrease your risk of
                type 2 diabetes.
              </p>
            </div>
          </div>
          <div className="cols col-2">
            <div className="cols">
              <img src={aboutImg} />
            </div>
            <div className="cols">
              <ul className="check">
                <li>
                  <BsCheck2All fill="#8ec038" size={20} /> Reduces weight
                </li>
                <li>
                  <BsCheck2All fill="#8ec038" size={20} /> Exact calorie content
                </li>
                <li>
                  <BsCheck2All fill="#8ec038" size={20} /> Improves health
                </li>
                <li>
                  <BsCheck2All fill="#8ec038" size={20} /> No sugar and gluten
                </li>
                <li>
                  <BsCheck2All fill="#8ec038" size={20} /> Adds strength and
                  energy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about-divider">
        <img src={testimonialBg} alt="bg" />
      </div>
    </>
  );
};

export default AboutComponent;
