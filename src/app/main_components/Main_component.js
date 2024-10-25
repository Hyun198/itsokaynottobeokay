import Link from 'next/link';
import './Main_component.style.css';

async function fetchDramaData() {
    const drama_url = 'https://api.themoviedb.org/3/search/tv?query=사이코지만%20괜찮아&language=ko-KR';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        },
    };

    const drama_response = await fetch(drama_url, options);
    const infos = await drama_response.json();
    return infos.results[0];
}

async function fetchCastData(dramaId) {
    const credits_url = `https://api.themoviedb.org/3/tv/${dramaId}/credits?language=ko-KR`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        },
    };

    const credits_response = await fetch(credits_url, options);
    const credits_data = await credits_response.json();
    return credits_data.cast;
}



export default async function MainComponent() {
    const infos = await fetchDramaData();
    const cast = await fetchCastData(infos.id);

    return (
        <>
            <div className="main-info">
                <h2>{infos.original_name}</h2>
                <Link href={`/detail/${infos.id}`} className="detail-button">Episodes</Link>
                <p>{(infos.overview).split('. ').map((sentence, index) => (
                    <span key={index}>
                        {sentence}
                        <br />
                    </span>))}
                </p>
            </div>
            <div className="cast-info">
                <h3>출연진</h3>
                <ul>
                    {cast.slice(0, 10).map((actor) => (
                        <li key={actor.id}>
                            <p>{actor.name}<br></br> {/* {actor.character} */}</p>
                            {actor.profile_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                    alt={actor.name}
                                    width={100}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>


        </>
    );
}