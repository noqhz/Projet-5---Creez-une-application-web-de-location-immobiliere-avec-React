import PropTypes from 'prop-types';
import '../App.scss';
import GrayStar from '../assets/gray-star.png';
import RedStar from '../assets/red-star.png';
import './Rating.scss';

function Rating({ value }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <img
                key={i}
                src={i <= value ? RedStar : GrayStar}
                alt={`Note : ${i}/5`}
                className="star"
            />
        );
    }

    return <div className="rating">{stars}</div>;
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Rating;
