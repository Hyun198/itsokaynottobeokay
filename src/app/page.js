import MainComponent from "./main_components/Main_component"
import QuotesComponent from "./quotes_components/quotes_component"
export default async function Home() {


  return (
    <>
      <div className="home-container">
        <h2>it's okay to be not okay</h2>
        <p>[2020.06.20 ~ 2020.08.09]</p>
        <img src="/drama-poster.jpg" alt="drama-poster" />

      </div>
      <MainComponent />
      <QuotesComponent />
    </>
  );
}

