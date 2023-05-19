//instamart component - show example of lifting the state up
import { useState } from "react";
import {
  BsFillArrowDownSquareFill,
  BsArrowRightSquareFill,
} from "react-icons/bs";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="section-wrap my-5">
      <div className="flex justify-between items-center p-3 border rounded border-gray-800">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center">
          {isVisible ? (
            <button onClick={() => setIsVisible(false)}>
              <span className="flex items-center gap-2">
                <span>Hide</span>{" "}
                <BsFillArrowDownSquareFill fill="#8ec038" size={25} />
              </span>
            </button>
          ) : (
            <button onClick={() => setIsVisible(true)}>
              <span className="flex items-center gap-2">
                <span>Show</span>{" "}
                <BsArrowRightSquareFill fill="#8ec038" size={25} />
              </span>
            </button>
          )}
        </div>
      </div>
      {isVisible && (
        <div className="p-3 transition ease-in-out duration-300">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const Instamart = () => {
  // parent control over child state variable
  const [visibleSection, setIsVisibleSection] = useState("about");
  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="section-main-wrapper">
            <div className="instamart-page-section">
              <h5 className="font-bold underline underline-offset-4">
                This is example for Lifting the state up. ie Parent control over
                child components
              </h5>
              <Section
                title={"About"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                isVisible={visibleSection == "about"}
                setIsVisible={(display) => {
                  // to hide again on click this condition is used
                  if (display) {
                    setIsVisibleSection("about");
                  } else {
                    setIsVisibleSection("");
                  }
                }}
              />
              <Section
                title={"Our Team"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                isVisible={visibleSection == "team"}
                setIsVisible={(display) => {
                  if (display) {
                    setIsVisibleSection("team");
                  } else {
                    setIsVisibleSection("");
                  }
                }}
              />
              <Section
                title={"Our Clients"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                isVisible={visibleSection == "client"}
                setIsVisible={(display) => {
                  if (display) {
                    setIsVisibleSection("client");
                  } else {
                    setIsVisibleSection("");
                  }
                }}
              />
              <Section
                title={"Career"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                isVisible={visibleSection == "career"}
                setIsVisible={(display) => {
                  if (display) {
                    setIsVisibleSection("career");
                  } else {
                    setIsVisibleSection("");
                  }
                }}
              />
              <Section
                title={"FAQs"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                isVisible={visibleSection == "faq"}
                setIsVisible={(display) => {
                  if (display) {
                    setIsVisibleSection("faq");
                  } else {
                    setIsVisibleSection("");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instamart;
