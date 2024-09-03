import './TrackItem.css';

function TrackItem({ song }) {
  const convertToMinutes = (ms) => {
    const milliseconds = new Date(ms);
    const minutes = milliseconds.getMinutes();
    const seconds = String(milliseconds.getSeconds()).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="songs-grid__item">
      <p className="songs-grid__position">{song.position}</p>
      <div className="songs-grid__name-artist">
        <p className="songs-grid__name">{song.title}</p>
        <span className="songs-grid__artist">{song.artist}</span>
      </div>
      <p className="songs-grid__duration">{convertToMinutes(song.duration)}</p>
    </div>
  );
}

export default TrackItem;
