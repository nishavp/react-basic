import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "./constants";

const useRestaurantList = () => {
  // In useState(resList) we have passed the mock data or api data
  // const [set the variable , function to update the variable] = useState(pass the mock data values)
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [listOfFilteredRestaurant, setListOfFilteredRestaurant] = useState([]);

  // calling getRestaurantList() function in useEffect() and passing setListOfRestaurant as the state.
  // Because we want to execute when list state changes
  useEffect(() => {
    //console.log("call when this dependency is changed");
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();
    // console.log(json);
    // will set the initial value for both states
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setListOfFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return {
    listOfRestaurant,
    listOfFilteredRestaurant,
    setListOfFilteredRestaurant,
  };
};

export default useRestaurantList;
