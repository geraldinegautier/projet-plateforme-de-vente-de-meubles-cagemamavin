import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from './components/Footer';
import Catalogue from "./pages/Catalogue";
import Canapes from "./pages/Canapes";
import CanapeDetails from './pages/CanapeDetails';
import Chaises from "./pages/Chaises";
import ChaiseDetails from './pages/ChaiseDetails';
import Tables from "./pages/Tables";
import TableDetails from './pages/TableDetails';
import Panier from './pages/Panier';
import Connexion from './pages/Connexion';
import Header from './components/Header';
import './index.css'
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Compte from './pages/Compte';

function App() {

  return (
    <>
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/canapes" element={<Canapes />} />
            <Route path="/canapes/:id" element={<CanapeDetails />} />
            <Route path="/chaises" element={<Chaises />} />
            <Route path="/chaises/:id" element={<ChaiseDetails />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/tables/:id" element={<TableDetails />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/admin" element={< Admin />} />
            <Route path="/contact" element={< Contact />} />
            <Route path="/compte/:id" element={< Compte />} />

          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  )
}

export default App
