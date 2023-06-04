import React from 'react';

import '../Button/Button.scss';

const Button = ({ text, newId, location }) => {
    return (
        <>
            <button id={newId} className='btn'>
                <a className='btn-text' href={location}>{text}</a>
            </button>
        </>
    );
};

export default Button;