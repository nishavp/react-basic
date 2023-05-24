import { MENU_ITEM_URL, MENU_ITEM_PLACEHOLDER } from "../utils/constants";

const MenuItem = ({ name, description, image, price, quantity }) => {
  return (
    <div className="menu-single-item flex gap-4">
      <div className="img-wrapper">
        <img
          className="w-[120px] min-w-[120px] rounded border border-[#8ec03850]"
          src={
            image == undefined ? MENU_ITEM_PLACEHOLDER : MENU_ITEM_URL + image
          }
          alt="food"
        />
      </div>
      <div className="content-wrapper">
        <h4 className="font-bold text-[16px]">{name}</h4>
        <p>{description}</p>
        <div className="flex gap-10 mt-5">
          <p>
            <span className="font-bold">Quantity</span> : {quantity}
          </p>
          <p>
            <span className="font-bold">Amount</span> : Rs. {price / 100}/-
          </p>
          <p>
            <span className="font-bold">Total</span> : Rs.{" "}
            {(price * quantity) / 100}/-
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
