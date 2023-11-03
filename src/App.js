import Header from './components/Header.jsx';
import React from 'react';
import Cards from './components/Cards.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      
        <Routes>
          <Route path='/' element={<Cards />}></Route>
          <Route path='/:id' element={<PokemonDetails />}></Route>
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
