import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faClock } from '@fortawesome/free-solid-svg-icons';
import TrackItem from './TrackItem';
import './TrackList.css';

function TrackList({ songs }) {
  return (
    <div className="songs-grid">
      <div className="songs-grid__title">
        <FontAwesomeIcon icon={faHashtag} className="songs-title song-title__icon" />
        <p className="songs-title">Title</p>
        <FontAwesomeIcon icon={faClock} className="songs-title song-title__icon" />
      </div>
      {songs.map((song) => (
        <TrackItem key={song.uid} song={song} />
      ))}
    </div>
  );
}

export default TrackList;
