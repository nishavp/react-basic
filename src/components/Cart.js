//cart component
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="contact-page-section">
            <div className="section-heading flex justify-between gap-5 items-center">
              <h2 className="font-bold">
                <span>Cart Items ({cartItems.length})</span>
              </h2>
              <div className="btn-wrap">
                <button
                  className="bg-[#da2424] rounded px-4 py-2 text-[#fff] cursor-pointer text-[14px]"
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="mb-10">
              {cartItems.map((data) => (
                <MenuItem
                  key={data?.card?.info?.id}
                  image={data?.card?.info?.imageId}
                  name={data?.card?.info?.name}
                  description={data?.card?.info?.description}
                  price={
                    data?.card?.info?.price || data?.card?.info?.defaultPrice
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
