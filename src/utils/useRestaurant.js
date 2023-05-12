// this is example ie a separate file for listing restaurant menu from the API.
import { useEffect, useState } from "react";

const useRestaurant = (restaurantId) => {
  // create useState variable for maintaining the API data in the state and returining at end of the function
  const [restaurant, setRestaurant] = useState({});
  const [menuList, setMenuList] = useState({});

  useEffect(() => {
    //console.log("call when this dependency is changed");
    getRestaurantInfo();
  }, []);

  // API call pass the dynamic id to get the restaurant details
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        restaurantId
    );
    const json = await data.json();
    //console.log(json.data);
    setRestaurant(json.data?.cards[0]?.card?.card);
    setMenuList(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  // return API data from the function
  return { restaurant, menuList };
};

export default useRestaurant;
