import './App.css';
import { data } from './data/data.js'; 
import ArtistHeader from './components/ArtistHeader.jsx';
import ActionButtons from './components/ActionButtons.jsx';

function App() {
  const { profile, stats, discography } = data.artistUnion; 
  return (
    <div className="App">
      <ArtistHeader
        headerImg={profile.imageUrl}
        nameArtist={profile.name}
        verified={profile.verified}
        monthlyListeners={stats.monthlyListeners}
      />
      <div>
        <ActionButtons />
      </div>
    </div> 
  );
}

export default App;
