import { data } from './data/data.js';
import ArtistHeader from './components/ArtistHeader.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import TrackList from './components/TrackList.jsx';

function App() {
  const { profile, stats, discography } = data.artistUnion;

  const getAlbumDetails = (data) => {
    const albums = data?.artistUnion?.discography?.albums.items || [];
    const albumDetails =
      albums.map((album) => {
        const release = album?.releases?.items?.[0] || {};
        return {
          id: release.id || '',
          songs: getSongsAlbum(album),
        };
      }) || [];
    return albumDetails;
  };

  const getSongsAlbum = (album) => {
    const songsAlbum = album?.releases?.items?.[0]?.tracks?.items || [];
    const songsDetails = songsAlbum.map((trackItem) => {
      const track = trackItem?.track || {};
      return {
        uid: trackItem?.uid || '',
        position: track.trackNumber || '',
        title: track.name || '',
        artist: track.artists?.items?.[0]?.profile?.name || '',
        duration: track.duration?.totalMilliseconds || '0',
      };
    });

    return songsDetails;
  };

  const albumDetails = getAlbumDetails(data);
  const validateAlbumDetails = albumDetails.length > 0;

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
      <div>
        {validateAlbumDetails ? (
          albumDetails.map((album) => <TrackList songs={album.songs} key={album.id} />)
        ) : (
          <p>Album not found</p>
        )}
      </div>
    </div>
  );
}

export default App;
