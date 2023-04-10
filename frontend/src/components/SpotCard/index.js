import "./SpotCard.css";
import { NavLink } from 'react-router-dom';

export default function SpotCard({spot}) {

    return (
        <div className="spot-card">
            <NavLink exact to={`/spots/${spot.id}`}>
                <div>
                    <img src={spot.previewImage} alt="spot image"></img>
                </div>
                <div className="spot-details">
                    <h3>{spot.city}, {spot.state}</h3>
                <h3><i className="fa-solid fa-star"></i> {spot.avgRating === "no average rating" ? "New" : spot.avgRating}</h3>
                </div>
                <h4>${spot.price} night</h4>
            </NavLink>
        </div>
    )
}