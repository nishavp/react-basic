import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import {
  CDN_URL,
  MENU_ITEM_URL,
  MENU_ITEM_PLACEHOLDER,
} from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

//restaurant detail page component
const RestaurantMenu = () => {
  // read dynamic url using useParams
  const { restaurantId } = useParams();

  // call the export from custom hook and passing the restaurant Id as parameter
  // restaurant, menuList these 2 are return from the function so can be access here
  const { restaurant, menuList } = useRestaurant(restaurantId);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  // if (!restaurant) return null;
  // if (!menuList) return null;

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
                <h2 className="font-bold text-xl">{restaurant?.info?.name}</h2>
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
            <br />
            {!menuList ? (
              <div>
                <p>No Menu Items Found</p>
              </div>
            ) : (
              <div className="menu-list">
                <h2 className="font-bold text-xl">Menu Item List</h2>
                <div className="menu-list-ul">
                  {Object.values(menuList).map((item) => (
                    <div key={item?.card?.info?.id} className="menu-list-wrap">
                      <div className="m1-col">
                        <div className="img-wrapper">
                          <img
                            src={
                              item?.card?.info?.imageId == undefined
                                ? MENU_ITEM_PLACEHOLDER
                                : MENU_ITEM_URL + item?.card?.info?.imageId
                            }
                            alt="food"
                          />
                          {/* <img
                          src={MENU_ITEM_URL + item?.card?.info?.imageId}
                          alt="food"
                        /> */}
                        </div>
                      </div>
                      <div className="m2-col">
                        <h4 className="font-bold">{item?.card?.info?.name}</h4>
                        <p className="text-sm">{item?.card?.info?.category}</p>
                        <p className="text-sm">
                          {item?.card?.info?.description}
                        </p>
                        <p className="text-sm">
                          Rs.{" "}
                          {item?.card?.info?.defaultPrice / 100 ||
                            item?.card?.info?.price / 100}
                          /-
                        </p>
                        <button
                          className="add-to-cart"
                          onClick={() => addFoodItem(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {/* {console.log(Object.values(menuList))} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
