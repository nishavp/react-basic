import { useState } from "react";
import AboutComponent from "./About";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../data/data";
import { SlEmotsmile } from "react-icons/sl";

//body layout will have search and restaurant cards
const BodyLayout = () => {
  // first parameter is the variable and second parameter is the function name in which we are setting the updated state
  // In useState(resList) we have passed the mock data or api data
  const [listofRestaurant, setlistofRestaurant] = useState(resList);

  return (
    <div className="body-layout">
      <AboutComponent />
      <div className="container">
        <div className="card-listing">
          <div className="section-heading">
            <h2 className="heading-center">
              <span>Choose your favourite Food</span>{" "}
              <SlEmotsmile fill="#8ec038" size={35} />
            </h2>
          </div>
          <div className="filter-section">
            <p>Filter</p>
            <div className="filter-wrap">
              <button
                className="red-btn"
                onClick={() => {
                  //Filter logic code for all cards
                  setlistofRestaurant(resList);
                }}
              >
                Show All
              </button>
              <button
                className="red-btn"
                onClick={() => {
                  //Filter logic code for top rated cards
                  const filteredList = resList.filter(
                    (result) => result.data.avgRating > 4
                  );
                  setlistofRestaurant(filteredList);
                  //console.log(filteredList);
                }}
              >
                Top Rated
              </button>
            </div>
          </div>
          <div className="card-grid">
            {listofRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyLayout;
