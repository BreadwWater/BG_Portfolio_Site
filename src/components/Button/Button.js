import React, { useState } from 'react';
import '../Button/Button.scss';

const Button = ({ text, newId, location, isActive, onClick }) => {
    return (
        <button onClick={onClick} id={newId} className={`btn ${isActive ? 'btn--active' : 'btn--inactive'}`}>
            <span className="btn-text">{text}</span>
        </button>
    );
};

export default Button;


