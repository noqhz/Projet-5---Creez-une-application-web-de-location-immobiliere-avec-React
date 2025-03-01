import PropTypes from "prop-types";
import './Banner.scss';
 
function Banner({img,title}) {
    return (
            <div className="banner">
                <img src={img} alt={title} />
                <p>{title}</p>
            </div>
    )
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Banner;
