import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import React from 'react';
import './App.css';
import { data } from './data/data.js'; // Ajusta la ruta según sea necesario
import ArtistHeader from './components/ArtistHeader.jsx';

function App() {
  const { profile, stats } = data.artistUnion; // Desestructura el objeto `artistUnion`
  return (
    <div className="App">
      <ArtistHeader
        headerImg={profile.imageUrl}
        nameArtist={profile.name}
        verified={profile.verified}
        monthlyListeners={stats.monthlyListeners}
      />
    </div>
  );
}

export default App;
