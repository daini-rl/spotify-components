import React from 'react';
import AlbumInfo from './AlbumInfo.jsx';
import TrackList from './TrackList.jsx';

function AlbumCollection({ albums, getSongsAlbum, albumDetails, validateAlbumDetails }) {
  return (
    <div className="album-collection">
      {albums.map((albumGroup) =>
        albumGroup.releases.items.map((album) => {
          const songs = getSongsAlbum(album);
          const albumDetail = albumDetails.find((detail) => detail.id === album.id);
          return (
            <div key={album.id} className="album-item">
              <AlbumInfo album={album} />
              {validateAlbumDetails && albumDetail ? (
                <TrackList songs={albumDetail.songs} />
              ) : (
                <p>Album not found</p>
              )}
            </div>
          );
        }),
      )}
    </div>
  );
}

export default AlbumCollection;
