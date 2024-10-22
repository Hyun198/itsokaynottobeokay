import './read.style.css'

export default async function Read(props) {
    const response = await fetch(process.env.NEXT_PUBLIC_DB_API_URL + `locations/${props.params.id}`);
    const location = await response.json();
    return (
        <>
            <div className="location-detail">
                <img src={location.location_img} alt="location-image" />
                <h3>{location.location_name}</h3>
                <p>{location.description}</p>
                <p>{location.location_address}</p>
                <div>
                    길찾기
                </div>
            </div>

        </>
    )
}