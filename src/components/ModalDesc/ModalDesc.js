import React, { useState } from 'react';
import './ModalDesc.scss';
import ArrowIcon from '../../assets/icons/arrow--icon.svg';
import StackTag from '../StackTag/StackTag';

import GitHubIcon from '../../assets/icons/GitHub-outline--icon.svg';
import ExtLinkIcon from '../../assets/icons/ExtLink--icon.svg';

function ModalDesc({ Title, hasWebsite, websiteLink, githubLink, stacks, modalDesc }) {
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
                        <div className="modaldesc__group">
                            <div className="modaldesc--stack">
                                {stacks.map((stack, index) => (
                                    <React.Fragment key={index}>
                                        <StackTag stack={stack} />
                                        {index < stacks.length - 1 && <span>•</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <p className="modaldesc--title">{Title}</p>
                        <p className="modaldesc--text">
                            {modalDesc}
                        </p>
                        <div className="modaldesc__external">
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="modaldesc--link">
                                <img className="modaldesc--link-img" src={GitHubIcon} alt="Github Link" />
                            </a>
                            {hasWebsite && (
                                <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="modaldesc--link">
                                    <img className="modaldesc--link-img" src={ExtLinkIcon} alt="Site Link" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ModalDesc;
