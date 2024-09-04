import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faCheck } from '@fortawesome/free-solid-svg-icons';
import './ArtistHeader.css';

const ArtistHeader = ({ headerImg, nameArtist, verified, monthlyListeners }) => {
  const formattedListeners = monthlyListeners?.toLocaleString();

  return (
    <div className="artist-header">
      <img src={headerImg} alt={`${nameArtist} header`} className="header-img" />
      <div className="artist-info">
        {verified && (
          <div className="verified">
            <FontAwesomeIcon icon={faCertificate} className="verified-icon" />
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
            <span className="verified-text">Verified Artist</span>
          </div>
        )}
        <h1 className="name-artist">{nameArtist}</h1>
        {formattedListeners && (
          <p className="monthly-listeners">{formattedListeners} monthly listeners</p>
        )}
      </div>
    </div>
  );
};

export default ArtistHeader;
