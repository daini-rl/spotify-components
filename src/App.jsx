import './App.css';
import { data } from './data/data.js'; // Ajusta la ruta según sea necesario
import ArtistHeader from './components/ArtistHeader.jsx';
import AlbumInfo from './components/AlbumInfo.jsx';

function App() {
  const { profile, stats, discography } = data.artistUnion; // Desestructura el objeto `artistUnion`

  // Accede a los tres primeros álbumes en la estructura de datos
  const albums = discography.albums.items.slice(0, 3); // Obtén los primeros 3 álbumes

  return (
    <div className="App">
      <ArtistHeader
        headerImg={profile.imageUrl}
        nameArtist={profile.name}
        verified={profile.verified}
        monthlyListeners={stats.monthlyListeners}
      />
      {albums.map((albumGroup, index) => (
        albumGroup.releases.items.slice(0, 1).map((album) => (
          <AlbumInfo key={index} album={album} />
        ))
      ))}
    </div>
  );
}

export default App;

