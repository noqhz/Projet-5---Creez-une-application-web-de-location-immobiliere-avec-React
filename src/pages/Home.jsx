import Banner from '../components/banner.jsx';
import Card from '../components/card.jsx';
import ImgHome from '../assets/falaises.png';
import logements from '../logements.json';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <Banner img={ImgHome} title="Chez vous, partout et ailleurs" />
      <div className="cards-logements">
      {logements.map((logement) => (
                <Link to= {`/logement/${logement.id}`} key={logement.id}>
                <Card
                title={logement.title}
                picture={logement.cover}
            />
            </Link>
      ))}
      </div>
    </div>
  )
}
  
  export default Home;
