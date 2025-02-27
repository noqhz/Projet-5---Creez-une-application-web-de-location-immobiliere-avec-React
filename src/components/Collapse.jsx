import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.scss';
import Arrow from '../assets/collapse_arrow.png';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-title" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <span className={`collapse-icon ${isOpen ? 'open' : ''}`}><img src={Arrow} alt="collapse on/off" /></span>
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
            {/* {isOpen && <div className="collapse-content">{children}</div>} */}
        </div>
        
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapse;