import { MENU_ITEM_URL, MENU_ITEM_PLACEHOLDER } from "../utils/constants";

const MenuItem = ({ name, description, image, price }) => {
  return (
    <div className="menu-single-item flex gap-4 mb-5">
      <div className="img-wrapper">
        <img
          className="w-[150px] rounded border border-[#8ec03850]"
          src={
            image == undefined ? MENU_ITEM_PLACEHOLDER : MENU_ITEM_URL + image
          }
          alt="food"
        />
      </div>
      <div className="content-wrapper">
        <h4 className="font-bold text-[16px]">{name}</h4>
        <p>{description}</p>
        <p>Rs. {price / 100}/-</p>
      </div>
    </div>
  );
};

export default MenuItem;
