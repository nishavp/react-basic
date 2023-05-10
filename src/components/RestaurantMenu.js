import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { CDN_URL } from "../utils/constants";

//restaurant detail page component
const RestaurantMenu = () => {
  // read dynamic url using useParams
  const { restaurantId } = useParams();
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
    // console.log(
    //   json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card?.itemCards
    // );
  }

  if (!restaurant) return null;
  if (!menuList) return null;

  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="menu-page-section">
            <div className="menu-main-details">
              <div className="mcol1">
                <div className="img-wrap">
                  <img
                    src={CDN_URL + restaurant?.info?.cloudinaryImageId}
                    alt="food"
                  />
                </div>
              </div>
              <div className="mcol2">
                <h2>{restaurant?.info?.name}</h2>
                <p className="cusine-name">
                  {restaurant?.info?.cuisines.join(", ")}
                </p>
                <p>{restaurant?.info?.city}</p>

                <p
                  className={
                    restaurant?.info?.avgRating < 4
                      ? "red-rating"
                      : "green-rating"
                  }
                >
                  <span>
                    <BsFillStarFill fill="#fff" size={15} />
                  </span>
                  <span>{restaurant?.info?.avgRating}</span>
                </p>
              </div>
            </div>
            <div className="menu-list">
              <p>
                <strong>Menu List</strong>
              </p>
              <ul>
                {Object.values(menuList).map((item) => (
                  <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                ))}
              </ul>
              {/* {console.log(Object.values(menuList))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
