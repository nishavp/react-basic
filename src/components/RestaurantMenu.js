import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { CDN_URL } from "../utils/constants";

//restaurant detail page component
const RestaurantMenu = () => {
  // read dynamic url using useParams
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState({});

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
    console.log(json.data);
    setRestaurant(json.data?.cards[0]);
  }

  if (!restaurant) return null;

  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="menu-page-section">
            <div className="menu-main-details">
              <div className="mcol1">
                <div className="img-wrap">
                  <img
                    src={
                      CDN_URL + restaurant?.card?.card?.info?.cloudinaryImageId
                    }
                    alt="food"
                  />
                </div>
              </div>
              <div className="mcol2">
                <h2>{restaurant?.card?.card?.info?.name}</h2>
                <p className="cusine-name">
                  {restaurant?.card?.card?.info?.cuisines.join(", ")}
                </p>
                <p>{restaurant?.card?.card?.info?.city}</p>

                <p
                  className={
                    restaurant?.card?.card?.info?.avgRating < 4
                      ? "red-rating"
                      : "green-rating"
                  }
                >
                  <span>
                    <BsFillStarFill fill="#fff" size={15} />
                  </span>
                  <span>{restaurant?.card?.card?.info?.avgRating}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
