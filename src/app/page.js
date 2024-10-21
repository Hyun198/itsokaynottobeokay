import MainComponent from "./main_components/Main_component"

export default async function Home() {
  return (
    <>
      <div className="home-container">
        <h2>it's okay to be not okay</h2>
        <img src="/drama-poster.jpg" alt="drama-poster" />
      </div>
      <MainComponent />
    </>
  );
}

