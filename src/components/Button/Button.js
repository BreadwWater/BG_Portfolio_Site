import React from 'react';

import '../Button/Button.scss';

const Button = ({ text, newId }) => {
    return (
        <>
            <button id={newId} className='btn'>
                <a className='btn-text' href="/">{text}</a>
            </button>
        </>
    );
};

export default Button;