// this is example ie a separate file for listing restaurant menu from the API.
import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurant = (restaurantId) => {
  // create useState variable for maintaining the API data in the state and returining at end of the function
  const [restaurant, setRestaurant] = useState(null);
  const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    //console.log("call when this dependency is changed");
    getRestaurantInfo();
  }, []);

  // API call pass the dynamic id to get the restaurant details
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();
    //console.log(json.data);
    setRestaurant(json.data?.cards[0]?.card?.card);
    setMenuList(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  // return API data from the function
  return { restaurant, menuList };
};

export default useRestaurant;
