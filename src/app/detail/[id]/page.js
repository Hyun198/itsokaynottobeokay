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
    console.log(result);
    const episodes = result.episodes;

    return (
        <>
            detail page

            <ul>
                {episodes?.map((episode) => {
                    return (
                        <li key={episode.episode_number}>
                            <h3>{episode.name}</h3>
                        </li>
                    );
                })}
            </ul>

        </>
    )
}