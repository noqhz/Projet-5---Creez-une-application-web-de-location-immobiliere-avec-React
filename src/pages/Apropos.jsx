import Banner from '../components/banner.jsx';
import ImgAbout from '../assets/foret.png';
import Collapse from '../components/Collapse';
import aproposData from '../apropos.json';
import './Apropos.scss';

function Apropos() {
  return (
    <div className="about">
      <Banner img={ImgAbout} title="" />
      <div className="about__collapse">
        {aproposData.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  )
}
  
export default Apropos;
