const LocationCard = ({image, locationName, rating, features}) => {
    return (
        <div className="locationCard">
            <div className="locationImage">
                {/*link image*/}
                <h5>{locationName}</h5>
                <h6>{rating}</h6>
                <p>{features}</p>
            </div>
        </div>
    );
}
 
export default LocationCard;