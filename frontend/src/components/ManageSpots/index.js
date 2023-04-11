import SpotCard from "../SpotCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSpotsThunk } from "../../store/spots";
import "./ManageSpots.css"
import DeleteSpot from "../DeleteSpot";

export default function ManageSpots() {
    const dispatch = useDispatch();

    const spotsObj = useSelector(state => state.spots.allSpots);
    const spots = Object.values(spotsObj)

    useEffect(() => {
        dispatch(getUserSpotsThunk())
    }, [dispatch])

    return (
        <div className="user-spots">
            {spots.length > 0 && spots.map(spot => (
                <div key = {spot.id}>
                    <SpotCard spot={spot} />
                    <button>Update</button>
                    <DeleteSpot spot={spot} />
                </div>
            ))}
        </div>
    )
}