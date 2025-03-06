import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.scss';
import Arrow from '../assets/collapse_arrow.png';
import './Collapse.scss';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse__title" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <span className={`collapse__icon ${isOpen ? 'open' : ''}`}><img src={Arrow} alt="Afficher / Masquer" /></span>
            </div>
            <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
        
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapse;
