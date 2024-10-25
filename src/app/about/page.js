import './about.style.css'

export default async function about() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_DB_API_URL}/about`)
    const data = await response.json();

    return (
        <>
            <h1>About page</h1>
            <div className="about-container">
                #{data[0].title}
                <div className="subtitle">
                    # .{data[0].subtitle}
                </div>
                <div className="intro">
                    {data[0].intro.split("\n").map((line) => (
                        <p style={{ padding: "8px 0" }}>{line}</p>
                    ))}

                </div>

                <div className="theme">
                    # .{data[0].theme}
                </div>
                <div className="message">
                    {data[0].message.split(".").map((line) => (
                        <p>{line}</p>
                    ))}
                </div>
            </div>

        </>

    )
}