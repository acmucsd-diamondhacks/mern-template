import Image from 'next/image'

const LocationCard = ({image, locationName, rating, features}) => {
    return (
        <div className="locationCard">
            <div className="locationImage">
                <Image
                src = {image}
                alt = "Image of " + {locationName}
                />
                <h5>{locationName}</h5>
                <h6>{rating}</h6>
                <p>{features}</p>
            </div>
        </div>
    );
}
 
export default LocationCard;