import { useState } from "react";
import HomeAboutComponent from "./HomeAbout";
import RestaurantCard from "./RestaurantCard";
import CardShimmer from "./CardShimmer";
// import { resList } from "../data/data";
import { SlEmotsmile } from "react-icons/sl";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import { filterSearchData } from "../utils/helper";

//body layout will have search and restaurant cards
const BodyLayout = () => {
  // search text useState
  const [searchText, setSearchText] = useState("");
  const {
    listOfRestaurant,
    listOfFilteredRestaurant,
    setListOfFilteredRestaurant,
  } = useRestaurantList();

  if (!listOfRestaurant) return null;

  return (
    <div className="body-layout">
      <HomeAboutComponent />
      <div className="container">
        <div className="card-listing">
          <div className="section-heading">
            <h2 className="heading-center">
              <span className="font-extrabold">Choose your favourite Food</span>{" "}
              <SlEmotsmile fill="#8ec038" size={35} />
            </h2>
          </div>
          <div className="filter-section">
            <div className="filter-wrap xs:flex-col sm:flex-col md:flex-row">
              <div className="fiter-btns">
                <p>Filter</p>
                <button
                  className="filter-single-btn"
                  onClick={() => {
                    //Filter logic code for all cards
                    setListOfFilteredRestaurant(listOfRestaurant);
                  }}
                >
                  Show All
                </button>
                <button
                  className="filter-single-btn"
                  onClick={() => {
                    //Filter logic code for top rated cards
                    const filteredList = listOfRestaurant.filter(
                      (result) => result?.data?.avgRating > 4
                    );
                    setListOfFilteredRestaurant(filteredList);
                    //console.log(filteredList);
                  }}
                >
                  Top Rated
                </button>
                <button
                  className="filter-single-btn"
                  onClick={() => {
                    //Filter logic code for top rated cards
                    const filteredList = listOfRestaurant.filter(
                      (result) => result?.data?.avgRating < 4
                    );
                    setListOfFilteredRestaurant(filteredList);
                    //console.log(filteredList);
                  }}
                >
                  Avg Rated
                </button>
              </div>
              <div className="search-container">
                <input
                  data-testid="search-input-id"
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchText}
                  // e.target.value => whatever we write in input
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  data-testid="search-btn"
                  className="red-btn"
                  onClick={() => {
                    // call the function ie search the text in the list of restaurant
                    const searchData = filterSearchData(
                      searchText, // search value
                      listOfRestaurant // list of restaurant search from original list
                    );
                    // update list of filtered restaurant
                    setListOfFilteredRestaurant(searchData);
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {listOfRestaurant.length === 0 ? (
            //loading blank data till API loads actual data
            <CardShimmer />
          ) : (
            <>
              {listOfFilteredRestaurant.length === 0 ? (
                <div className="msg-wrap">
                  <p>No data found</p>
                </div>
              ) : (
                <div className="card-grid" data-testid="rest-list">
                  {listOfFilteredRestaurant.map((restaurant) => (
                    <Link
                      to={"/restaurant/" + restaurant.data.id}
                      key={restaurant.data.id}
                    >
                      <RestaurantCard resData={restaurant} />
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyLayout;
