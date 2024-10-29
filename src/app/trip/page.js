'use client'
import useSWR from "swr";
import './trip.style.css';
import { useRouter } from "next/navigation";
import Link from "next/link";


const fetcher = (url) => fetch(url).then(res => res.json())
export default function Trip() {
    const router = useRouter();

    const { data: locations, error, mutate } = useSWR(process.env.NEXT_PUBLIC_DB_API_URL + '/locations', fetcher, {
        refreshInterval: 10000 * 60
    })

    if (error) return <div>Failed to load</div>
    if (!locations) return <div>Loading...</div>




    return (
        <>
            <div className="location-list">
                <h2>촬영지들</h2>
                <ul>
                    {locations?.map(location => (
                        <Link href={`/trip/read/${location.id}`}>
                            <li key={location.id}>
                                <img src={location.location_img} alt="location-image" />
                                <h3>{location.location_name}</h3>
                                <hr></hr>
                                <p>{location.description}</p>
                                <p>{location.location_address}</p>
                            </li>
                        </Link>
                    ))}
                </ul>

                <div className="location-list-button">
                    <button onClick={() => router.push('/trip/create')}>글쓰기</button>
                </div>
            </div>
        </>
    )
}