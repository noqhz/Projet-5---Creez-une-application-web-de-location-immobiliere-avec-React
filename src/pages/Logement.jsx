import { useParams } from "react-router-dom";
import logements from '../logements.json';
import Slideshow from '../components/Slideshow.jsx';
import Infos from '../components/Infos.jsx';
import Error from '../pages/Error/'

function Logement() {
  const { id } = useParams();
  let ficheLogement = logements.find((logement) => logement.id === id);

  if (!ficheLogement) {
    return < Error />;
  }

  return (
    <div className="logement">
      <Slideshow pictures={ficheLogement.pictures} />
      <Infos
        title={ficheLogement.title}
        description={ficheLogement.description}
        host={ficheLogement.host}
        rating={ficheLogement.rating}
        location={ficheLogement.location}
        equipments={ficheLogement.equipments}
        tags={ficheLogement.tags}
      />
    </div>
  )
}

export default Logement;