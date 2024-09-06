import { data } from './data/data.js';
import ArtistHeader from './components/ArtistHeader';
import ActionButtons from './components/ActionButtons';
import AlbumCollection from './components/AlbumCollection.jsx';

function App() {
  const { profile, stats } = data.artistUnion;

  const getAlbumDetails = (data) => {
    const albums = data?.artistUnion?.discography?.albums.items || [];
    const albumDetails =
      albums.map((album) => {
        const release = album?.releases?.items?.[0] || {};
        return {
          id: release.id || '',
          imgAlbum: release.coverArt.sources?.[0]?.url || '',
          nameAlbum: release.name || '',
          type: release.type || '',
          yearAlbum: release.date?.year || '',
          totalCount: release.tracks?.totalCount || 0,
          songs: getSongsAlbum(album),
        };
      }) || [];
    return albumDetails;
  };

  const getSongsAlbum = (album) => {
    const songsAlbum = album?.releases?.items?.[0]?.tracks?.items || [];
    return songsAlbum.map((trackItem) => {
      const track = trackItem?.track || {};
      return {
        uid: trackItem?.uid || '',
        position: track.trackNumber || '',
        title: track.name || '',
        artist: track.artists?.items?.[0]?.profile?.name || '',
        duration: track.duration?.totalMilliseconds || '0',
      };
    });
  };

  const albumDetails = getAlbumDetails(data);

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
        <AlbumCollection albums={albumDetails} />
      </div>
    </div>
  );
}

export default App;