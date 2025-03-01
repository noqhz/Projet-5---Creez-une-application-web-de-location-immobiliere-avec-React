import PropTypes from "prop-types";
import './Card.scss';

function Card({ label, title, picture }) {
    return (
        <div className="card">
            <span>{label}</span>
            <img src={picture} alt={title}/>
            <p>{title}</p>
        </div>
    );
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}
 
export default Card;