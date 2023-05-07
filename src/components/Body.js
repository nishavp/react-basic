import { useState, useEffect } from "react";
import HomeAboutComponent from "./HomeAbout";
import RestaurantCard from "./RestaurantCard";
import CardShimmer from "./CardShimmer";
import { resList } from "../data/data";
import { SlEmotsmile } from "react-icons/sl";

// search logic in the below function
function filterSearchData(searchText, listOfRestaurant) {
  const lowerCaseSearchText = searchText.toLowerCase();
  const resultData = listOfRestaurant.filter((res) =>
    res?.data?.name?.toLowerCase().includes(lowerCaseSearchText)
  );

  return resultData;
}

//body layout will have search and restaurant cards
const BodyLayout = () => {
  // In useState(resList) we have passed the mock data or api data
  // const [set the variable , function to update the variable] = useState(pass the mock data values)
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [listOfFilteredRestaurant, setListOfFilteredRestaurant] = useState([]);
  // search text useState
  const [searchText, setSearchText] = useState("");

  // calling getRestaurantList() function in useEffect() and passing setListOfRestaurant as the state.
  // Because we want to execute when list state changes
  useEffect(() => {
    //console.log("call when this dependency is changed");
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // will set the initial value for both states
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setListOfFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!listOfRestaurant) return null;

  return (
    <div className="body-layout">
      <HomeAboutComponent />
      <div className="container">
        <div className="card-listing">
          <div className="section-heading">
            <h2 className="heading-center">
              <span>Choose your favourite Food</span>{" "}
              <SlEmotsmile fill="#8ec038" size={35} />
            </h2>
          </div>
          <div className="filter-section">
            <div className="filter-wrap">
              <div className="fiter-btns">
                <p>Filter</p>
                <button
                  className="filter-single-btn"
                  onClick={() => {
                    //Filter logic code for all cards
                    setListOfFilteredRestaurant(resList);
                  }}
                >
                  Show All
                </button>
                <button
                  className="filter-single-btn"
                  onClick={() => {
                    //Filter logic code for top rated cards
                    const filteredList = resList.filter(
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
                    const filteredList = resList.filter(
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
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchText}
                  // e.target.value => whatever we write in input
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
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
                <div className="card-grid">
                  {listOfFilteredRestaurant.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.data.id}
                      resData={restaurant}
                    />
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