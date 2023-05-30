import React from 'react';

import '../Button/Button.scss';

const Button = ({ text }) => {
    return (
        <>
            <button className='btn'>
                <a className='btn-text' href="/">{text}Contact</a>
            </button>
        </>
    );
};

export default Button;