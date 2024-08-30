import './App.css';
import { data } from './data/data.js'; 
import ArtistHeader from './components/ArtistHeader.jsx';

function App() {
  const { profile, stats, discography } = data.artistUnion; // Desestructura el objeto `artistUnion`

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
