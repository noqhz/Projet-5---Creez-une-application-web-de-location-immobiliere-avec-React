import PropTypes from 'prop-types';
import '../App.scss';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';

function Infos({ title, description, host, rating, location, equipments, tags }) {
    return (
        // <div>
        // {ficheLogement.title}
        // <img src={ficheLogement.cover} alt="test" height={80} width={80} />
        // </div>
        <div className="infos">
          <div className="infos__cover">
            <div className="infos__title">
              <h1>{title}</h1>
              <p>{location}</p>
            </div>
            <div className="host">
              <p>{host.name.replace(" ", "\n")}</p>
              <img src={host.picture} alt={host.name} />
            </div>
          </div>
          <div className="infos__tags">
            <div className="tags">
              {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <Rating value={parseInt(rating, 10)} />
          </div>
          <div className="infos__collapse">
            <Collapse title="Description">
              <p>{description}</p>
            </Collapse>
            <Collapse title="Équipements">
              <p>{equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
              ))}</p>
            </Collapse>
          </div>
        </div>
    )
}

Infos.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Infos;

