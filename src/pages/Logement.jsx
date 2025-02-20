import { useParams } from "react-router-dom";
import logements from '../logements.json';

function Logement() {
  const { id } = useParams();
  let ficheLogement = logements.find((logement) => logement.id === id);
  return (
    <div>
      {ficheLogement.title}
      <img src={ficheLogement.cover} alt="test" height={80} width={80} />
    </div>
  )
}

export default Logement;