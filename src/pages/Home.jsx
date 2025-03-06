import Banner from '../components/banner.jsx';
import Card from '../components/card.jsx';
import ImgHome from '../assets/falaises.png';
import logements from '../logements.json';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Banner img={ImgHome} title={<>Chez vous,<br /> partout et ailleurs</>} />
      <div className="gallery">
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
