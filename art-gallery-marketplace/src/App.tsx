import { Routes, Route } from "react-router-dom"
import MainNav from "./components/Navbar";
import ArtGallery from "./components/ArtGallery";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import ArtistGallery from "./components/ArtistGallery";
import ArtistContainer from "./components/ArtistContainer";
import CartView from "./components/CartView";
import EditArtist from "./components/EditArtist";
import HomeView from "./components/HomeView";
import EditCommission from "./components/EditCommission";
import CommissionsView from "./components/CommissionsView";
import DeleteArtistView from "./components/DeleteArtistView";
import ArtworkView from "./components/ArtworkView"
import NewArtwork from "./components/NewArtwork";
import EditArtwork from "./components/EditArtwork";
import React from "react";

function App() {
  return (
    <div className="App bg-dark">
      <MainNav/>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/artists" element={<ArtistGallery />} />
        <Route path="/artists/:id/" element={<ArtistContainer/>}>
          <Route path='' element={<CommissionsView />} />
          <Route path='commission/update/:commissionId' element={<EditCommission />} />
        </Route>
        <Route path="/artists/update/:id" element={<EditArtist />} />
        <Route path="/artists/delete/:id" element={<DeleteArtistView />} />
        <Route path="/artworks" element={<ArtGallery />} />
        <Route path="/artworks/:id" element={<ArtworkView/>} />
        <Route path="/artworks/update/:id" element={<EditArtwork />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/artwork-form/:id" element={<NewArtwork />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

