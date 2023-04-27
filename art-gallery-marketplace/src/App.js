import { Routes, Route } from "react-router-dom"
import MainNav from "./components/Navbar";
import ArtGallery from "./components/ArtGallery";
import Footer from "./components/Footer";
import ImageView from "./components/ImageView";
import JoinUs from "./components/JoinUs";
import ArtistGallery from "./components/ArtistGallery";
import ArtistContainer from "./components/ArtistContainer";
import CartView from "./components/CartView";
import ArtworkForm from "./components/forms/ArtworkForm";
import EditArtist from "./components/EditArtist";
import HomeView from "./components/HomeView";
import EditCommission from "./components/EditCommission";
import CommissionsView from "./components/CommissionsView";

function App() {
  return (
    <div className="App bg-dark">
      <MainNav/>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/artworks" element={<ArtGallery />} />
        <Route path="/artworks/:id" element={<ImageView />} />
        <Route path="/artists" element={<ArtistGallery />} />
        <Route path="/artists/:id/" element={<ArtistContainer/>}>
          <Route path='' element={<CommissionsView />} />
          <Route path='commission/update/:commissionId' element={<EditCommission />} />
        </Route>
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/artwork-form" element={<ArtworkForm />} />
        <Route path="/artists/update/:id" element={<EditArtist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

