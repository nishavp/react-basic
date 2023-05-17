//instamart component - show example of lifting the state up
import { useState } from "react";
import {
  BsFillArrowDownSquareFill,
  BsArrowRightSquareFill,
} from "react-icons/bs";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="section-wrap my-5">
      <div className="flex justify-between items-center p-3 border rounded border-gray-800">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center">
          {isVisible ? (
            <button onClick={() => setIsVisible(false)}>
              <span className="flex items-center gap-2">
                <span>Hide</span> <BsFillArrowDownSquareFill size={25} />
              </span>
            </button>
          ) : (
            <button onClick={() => setIsVisible(true)}>
              <span className="flex items-center gap-2">
                <span>Show</span> <BsArrowRightSquareFill size={25} />
              </span>
            </button>
          )}
        </div>
      </div>
      {isVisible && (
        <div className="p-3">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const BasicAccordion = () => {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="section-main-wrapper">
            <div className="instamart-page-section">
              <h5 className="font-bold underline underline-offset-4">
                This is basic accordion. Here child has its own control of Hide
                and Show
              </h5>
              <Section
                title={"About"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              />
              <Section
                title={"Our Team"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              />
              <Section
                title={"Our Clients"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              />
              <Section
                title={"Career"}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicAccordion;
