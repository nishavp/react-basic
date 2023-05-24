//cart component
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  // access to cart items
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const removeMenuItem = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => {
    const itemPrice = item?.card?.info?.price || item?.card?.info?.defaultPrice;
    return total + itemPrice;
  }, 0);

  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="contact-page-section">
            <div className="section-heading flex justify-between gap-5 items-center">
              <h2 className="font-bold">
                <span>Cart Items ({cartItems.length})</span>
              </h2>
              <div className="btn-wrap flex gap-5 items-center">
                <div className="cart-total text-[18px]">
                  <span className="font-bold">Your Cart Total :</span> Rs.
                  {cartTotal / 100}/-
                </div>
                <button
                  className="bg-[#da2424] rounded px-4 py-2 text-[#fff] cursor-pointer text-[14px]"
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="mb-10">
              {cartItems.map((item) => (
                <div
                  className="menu-single-item-wrap relative mb-5"
                  key={item?.card?.info?.id}
                >
                  <MenuItem
                    image={item?.card?.info?.imageId}
                    name={item?.card?.info?.name}
                    description={item?.card?.info?.description}
                    price={
                      item?.card?.info?.price || item?.card?.info?.defaultPrice
                    }
                  />
                  <div className="cart-btn-wrapper">
                    <button
                      className="remove-btn"
                      onClick={() => removeMenuItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
