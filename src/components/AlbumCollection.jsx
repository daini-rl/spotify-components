
import AlbumInfo from './AlbumInfo';
import TrackList from './TrackList';

const AlbumCollection = ({ albums }) => {
  if (!albums || albums.length === 0) {
    return <p>No albums available.</p>;
  }

  return (
    <div className="album-collection">
      {albums.map((album) => (
        <div key={album.id} className="album-item">
          <AlbumInfo album={album} />
          <TrackList songs={album.songs} />
        </div>
      ))}
    </div>
  );
};

export default AlbumCollection;