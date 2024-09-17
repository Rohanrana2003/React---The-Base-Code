import {CDN_URL} from '../utils/constants'
import { STAR } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, cuisines, name, avgRating, costForTwo, sla } = resData?.info;
    return (

        <div className="res-card">
            <img
                className='res-logo'
                src={CDN_URL + cloudinaryImageId} alt="card-img" />

            <div className='card-info'>

                <div className="name-rating">
                    <h3>{name.length<15 ? name : name.slice(0,15)+'...'}</h3>

                    <div className="rating">
                        <h4>{avgRating? avgRating:"No Rating"} <span>{STAR}</span> </h4>
                    </div>
                </div>

                <h4>{cuisines.join(', ').length<25 ? cuisines.join(', ') : cuisines.join(', ').slice(0,25)+'...'}</h4>

                <div className="two-time">
                    <h4>{sla.deliveryTime} min</h4>
                    <h4>{costForTwo}</h4>
                </div>
                
            </div>
        </div>
    )
}

export default RestaurantCard;