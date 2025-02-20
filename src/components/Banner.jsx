import PropTypes from "prop-types";
 
function Banner({img,title}) {
    return (
            <div className="banner">
                <img src={img} alt={title} className="banner__image" />
                <p className="banner__title">{title}</p>
            </div>
    )
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Banner;