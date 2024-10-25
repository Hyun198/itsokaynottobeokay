'use client'

import { useEffect, useState } from "react";
import './trip.style.css';
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Trip() {
    const router = useRouter();
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocations()
    }, [])
    const fetchLocations = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_DB_API_URL + '/locations');
        const data = await response.json();
        setLocations(data);
    }



    return (
        <>
            <div className="location-list">
                <h2>촬영지 목록</h2>
                <ul>
                    {locations?.map(location => (
                        <li key={location.id}>
                            <img src={location.location_img} alt="location-image" />
                            <h3>{location.location_name}</h3>
                            <hr></hr>
                            <p>{location.description}</p>
                            <p>{location.location_address}</p>
                            <Link href={`/trip/read/${location.id}`}>Location Detail...</Link>
                        </li>
                    ))}
                </ul>

                <div >
                    <button onClick={() => router.push('/trip/create')}>Create</button>
                </div>
            </div>
        </>
    )
}