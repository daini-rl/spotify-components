import React from 'react';
import { data } from './data/data.js';
import ArtistHeader from './components/ArtistHeader.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import AlbumCollection from './components/AlbumCollection.jsx';

function App() {
  const { profile, stats, discography } = data.artistUnion;

  const albums = discography.albums.items;

  const getAlbumDetails = (data) => {
    const albums = data?.artistUnion?.discography?.albums.items || [];
    return albums.map((album) => {
      const release = album?.releases?.items?.[0] || {};
      return {
        id: release.id || '',
        songs: getSongsAlbum(album),
      };
    });
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
      <AlbumCollection
        albums={albums}
        getSongsAlbum={getSongsAlbum}
        albumDetails={albumDetails}
        validateAlbumDetails={validateAlbumDetails}
      />
    </div>
  );
}

export default App;
