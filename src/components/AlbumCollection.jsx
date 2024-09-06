import AlbumInfo from './AlbumInfo';
import TrackList from './TrackList';

function AlbumCollection({ albums }) {
  const getAlbumDetails = (albums) => {
    return albums.map((album) => {
      const release = album?.releases?.items?.[0] || {};
      const songs = release?.tracks?.items || [];
      return {
        id: release.id || '',
        songs: songs.map((trackItem) => {
          const track = trackItem?.track || {};
          return {
            uid: trackItem?.uid || '',
            position: track.trackNumber || '',
            title: track.name || '',
            artist: track.artists?.items?.[0]?.profile?.name || '',
            duration: track.duration?.totalMilliseconds || '0',
          };
        }),
      };
    });
  };

  // Procesar álbumes para obtener detalles
  const albumDetails = getAlbumDetails(albums);

  return (
    <div className="album-collection">
      {albums.map((album) => {
        // Encontrar los detalles del álbum correspondientes
        const albumDetail = albumDetails.find(detail => detail.id === album.id);

        return (
          <div key={album.id} className="album-item">
            <AlbumInfo album={album} />
            {albumDetail ? (
              <TrackList songs={albumDetail.songs} />
            ) : (
              <p>Album not found</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AlbumCollection;
