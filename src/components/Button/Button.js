import React from 'react';
import '../Button/Button.scss';

const Button = ({ text, newId, location, isActive, onClick, url }) => {
    const handleClick = (event) => {
        if (location) {
            event.preventDefault();
            const element = document.querySelector(location);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        if (url) {
            event.preventDefault();
            window.open(url, '_blank');
        }

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            onClick={handleClick}
            id={newId}
            className={`btn ${isActive ? 'btn--active' : 'btn--inactive'}`}
        >
            <span className="btn-text">{text}</span>
        </button>
    );
};

export default Button;
