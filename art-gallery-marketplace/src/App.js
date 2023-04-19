import ArtCarousel from "./components/Carousel";
import ArtistContainer from "./components/ArtistContainer";
function App() {
  return (
    <div className="App bg-dark">
      <h1 className="text-light" style={{textAlign:'center'}}>Art-Mart</h1>
      <ArtCarousel/>
      <ArtistContainer/>
    </div>
  );
}

export default App;

