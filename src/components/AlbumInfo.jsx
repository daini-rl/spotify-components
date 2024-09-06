import './AlbumInfo.css';
import Button from './Button';
import { faCirclePlay, faCirclePlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const AlbumInfo = ({ album }) => {
  return (
    <div className="album-info">
      <img className="album-cover" src={album.imgAlbum} alt={`${album.nameAlbum} cover`} />
      <div className="album-details">
        <h2 className="album-title">{album.nameAlbum}</h2>
        <p className="album-year">
          Album • {album.yearAlbum} • {album.totalCount} songs
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