import "./detail_id_style.css"

export default async function Detail(props) {
    const id = props.params.id;
    const seasonId = 1;

    const url = `https://api.themoviedb.org/3/tv/${id}/season/${seasonId}?language=ko-KR`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const episodes = result.episodes;

    return (
        <>
            <div className="episode-container">
                <h2>에피소드</h2>
                <ul>
                    {episodes?.map((episode) => {
                        return (
                            <li key={episode.episode_number}>
                                <img src={`https://media.themoviedb.org/t/p/w227_and_h127_bestv2/${episode.still_path}`} />
                                <div>
                                    <h3>{episode.name}</h3>
                                    <p>{episode.overview}</p>
                                </div>

                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}