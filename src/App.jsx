import { data } from './data/data.js';
import ArtistHeader from './components/ArtistHeader';
import ActionButtons from './components/ActionButtons';
import AlbumInfo from './components/AlbumInfo';
import TrackList from './components/TrackList';

function App() {
  const { profile, stats, discography } = data.artistUnion;
  const albums = discography.albums.items;

  // Función para obtener detalles del álbum
  const getAlbumDetails = (albums) => {
    return albums.map((album) => {
      const release = album?.releases?.items?.[0] || {};
      return {
        id: release.id || '',
        songs: getSongsAlbum(album),
      };
    });
  };

  // Función para obtener canciones del álbum
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

  // Obtener detalles del álbum
  const albumDetails = getAlbumDetails(albums);

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
      <div className="album-collection">
        {albums.map((albumGroup) =>
          albumGroup.releases.items.map((album) => {
            const albumDetail = albumDetails.find(detail => detail.id === album.id);
            return (
              <div key={album.id} className="album-item">
                <AlbumInfo album={album} />
                {albumDetail ? (
                  <TrackList songs={albumDetail.songs} />
                ) : (
                  <p>Track list not found</p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
