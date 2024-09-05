import Header from './components/Header.jsx';
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e); // Store the event for later
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', () => { });
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the PWA installation');
        } else {
          console.log('User dismissed the PWA installation');
        }
        setDeferredPrompt(null);
      });
    }
  };


  return (
    <div>
      <Header />

      <div>
        {deferredPrompt && (
          <button onClick={handleInstallClick}>
            Install App
          </button>
        )}
      </div>

      <Routes>
        <Route path='/' element={<Cards />}></Route>
        <Route path='/:id' element={<PokemonDetails />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
