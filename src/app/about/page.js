import './about.style.css'

export default function about() {

    fetch(`${process.env.NEXT_PUBLIC_DB_API_URL}/about`)
        .then(response => response.json())
        .then(result =>
            console.log(result))

    return (
        <h1>About page</h1>
    )
}