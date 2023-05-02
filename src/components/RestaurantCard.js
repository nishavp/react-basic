import { BsFillStarFill } from 'react-icons/bs';
import { BsCurrencyRupee } from 'react-icons/bs';
import { CDN_URL } from '../utils/constants';

//single restaurant card component as we will resuse it
const RestaurantCard = (props) => {
    const { resData } = props;
  
    //destructure your code properly
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwo
    } = resData?.data;
  
    return (
      <div className="single-card">
        <div className="img-wrap">
          <img src={CDN_URL + cloudinaryImageId} alt="food"/>
        </div>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="cusine-name">{cuisines.join(', ')}</p>
          <div className="card-inner-details">
            <p className="rating"><span><BsFillStarFill fill="#fff" size={15}/></span><span>{avgRating}</span></p>
            <p className="time">{deliveryTime} mins</p>
            <p className="price"><span><BsCurrencyRupee size={15}/></span><span>{costForTwo / 100} for two</span> </p>
          </div>
        </div>
      </div>
    );
}

export default RestaurantCard;