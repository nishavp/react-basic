import AboutComponent from "./About"; 
import RestaurantCard from "./RestaurantCard";
import { resList } from "../data/data";
import { SlEmotsmile } from "react-icons/sl";

//body layout will have search and restaurant cards
const BodyLayout = () => {
    return (
      <div className="body-layout">
          <AboutComponent/>
          <div className="container">
            <div className="search-wrap">search here</div>
            <div className="card-listing">
              <div className="section-heading">
                <h2 className="heading-center"><span>Choose your favourite Food</span> <SlEmotsmile fill="#8ec038" size={35}/></h2>    
              </div>
              <div className="card-grid">
                {resList.map((restaurant) => 
                  (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                )}
              </div>
            </div>
          </div>
      </div>
    );
}

export default BodyLayout;