import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Experiencia from "./pages/Experiencia";
import Projetos from "./pages/Projetos";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
          <Route path="/Experiencia" element={<Experiencia/>}/>
          <Route path="/Projetos" element={<Projetos/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
