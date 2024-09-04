import { data } from './data/data.js';
import ArtistHeader from './components/ArtistHeader.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import AlbumInfo from './components/AlbumInfo.jsx';
import TrackList from './components/TrackList.jsx';

function App() {
  const { profile, stats, discography } = data.artistUnion;

  const albums = discography.albums.items;

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
      {albums.map((albumGroup) =>
        albumGroup.releases.items.map((album) => {
          const songs = getSongsAlbum(album);
          const albumDetail = albumDetails.find(detail => detail.id === album.id);
          return (
            <div key={album.id}>
              <AlbumInfo album={album} />
              {validateAlbumDetails && albumDetail ? (
                <TrackList songs={albumDetail.songs} />
              ) : (
                <p>Album not found</p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;