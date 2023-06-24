import React, { useState } from 'react';
import './ModalDesc.scss';
import ArrowIcon from '../../assets/icons/arrow--icon.svg';

function ModalDesc({ Title }) {
    const [expanded, setExpanded] = useState(false);

    const toggleWidth = () => {
        setExpanded(!expanded);
    };

    const arrowIconStyle = {
        transform: expanded ? 'rotate(-180deg)' : 'rotate(0deg)',
    };

    return (
        <>
            <article className={`modaldesc ${expanded ? 'modaldesc--expanded' : ''}`} onClick={toggleWidth}>
                <div className="modaldesc__cont">
                    <img className="modaldesc--img" src={ArrowIcon} alt="Up Arrow" style={arrowIconStyle} />
                    <div className="modaldesc__desc">
                        <p className='modaldesc--stack'>React • SASS • JSX • AIVoice</p>
                        <p className='modaldesc--title'>{Title}</p>
                        <p className='modaldesc--text'>
                            Description of project Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa beatae ullam alias corporis! Molestiae quia, tempore assumenda blanditiis aliquid quam exercitationem minima dolore repellendus laborum soluta, inventore a cupiditate voluptas.
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ModalDesc;
