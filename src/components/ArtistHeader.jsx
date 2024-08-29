import './ArtistHeader.css';

// Componente ArtistHeader
const ArtistHeader = ({ headerImg, nameArtist, verified, monthlyListeners }) => {
  const formattedListeners = monthlyListeners?.toLocaleString();

  return (
    <div className="artist-header">
      <img src={headerImg} alt={`${nameArtist} header`} className="headerImg" />
      <div className="artist-info">
        {verified && (
          <div className="verified">
            <img src="/src/img/icon-verificado.png" alt="Artista verificado" className="verified" />
            <span className="verified-text">Verified Artist</span>
          </div>
        )}
        <h1 className="nameArtist">{nameArtist}</h1>
        {formattedListeners && (
          <p className="monthlyListeners">{formattedListeners} monthly listeners</p>
        )}
      </div>
    </div>
  );
};

export default ArtistHeader;
