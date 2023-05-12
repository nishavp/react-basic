import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { CDN_URL, MENU_ITEM_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";

//restaurant detail page component
const RestaurantMenu = () => {
  // read dynamic url using useParams
  const { restaurantId } = useParams();

  // call the export from custom hook and passing the restaurant Id as parameter
  // restaurant, menuList these 2 are return from the function so can be access here
  const { restaurant, menuList } = useRestaurant(restaurantId);
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
              <br />
              <h2>Menu Item List</h2>
              <div className="menu-list-ul">
                {Object.values(menuList).map((item) => (
                  <div key={item?.card?.info?.id} className="menu-list-wrap">
                    <div className="m1-col">
                      <div className="img-wrapper">
                        <img
                          src={MENU_ITEM_URL + item?.card?.info?.imageId}
                          alt="food"
                        />
                      </div>
                    </div>
                    <div className="m2-col">
                      <h4>{item?.card?.info?.name}</h4>
                      <p>{item?.card?.info?.category}</p>
                      <p>{item?.card?.info?.description}</p>
                      <p>Rs. {item?.card?.info?.price}/-</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* {console.log(Object.values(menuList))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
