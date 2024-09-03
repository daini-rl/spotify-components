import React from 'react';
import './AlbumInfo.css';
import Button from './Button';
import { faCirclePlay, faCirclePlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const AlbumInfo = ({ album }) => {
  if (!album) {
    return <div>No album data available.</div>;
  }

  const { coverArt, name, date, tracks } = album;
  const albumImageUrl = coverArt?.sources?.[0]?.url || '';
  const albumYear = date?.year || 'Unknown Year';
  const trackCount = tracks?.items?.length || 0;

  return (
    <div className="album-info">
      <img className="album-cover" src={albumImageUrl} alt={`${name} cover`} />
      <div className="album-details">
        <h2 className="album-title">{name}</h2>
        <p className="album-year">
          Album • {albumYear} • {trackCount} songs
        </p>
        <div className="action-buttons">
          <Button variant="contained" icon={faCirclePlay} color="white" size="medium" />
          <Button variant="icon" icon={faCirclePlus} color="white" size="medium" />
          <Button variant="icon" icon={faEllipsisH} color="gray" size="medium" />
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
