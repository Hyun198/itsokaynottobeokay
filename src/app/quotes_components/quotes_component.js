import "./quotes_component.style.css";

export default async function QuotesComponent() {
    const url = "http://localhost:9999/quotes";
    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();

    const randomIdx = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIdx];

    return (
        <>
            <div className="qutoes-container">
                <h3>{randomQuote.character}</h3>
                <p>{randomQuote.quote.split('. ').map((sentence, index) => (
                    <span key={index}>
                        {sentence}.
                        <br />
                    </span>))}</p>
            </div>

        </>
    )
}