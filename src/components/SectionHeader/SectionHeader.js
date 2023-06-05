import React, { useEffect, useRef } from 'react';
import './SectionHeader.scss';

function SectionHeader({ title, text }) {

    const animatedTextRef = useRef(null);

    useEffect(() => {
        const animatedText = animatedTextRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animatedText.classList.add('animation--underline');
                } else {
                    animatedText.classList.remove('animation--underline');
                }
            });
        });

        observer.observe(animatedText);

        return () => {
            observer.unobserve(animatedText);
        };
    }, []);

    return (
        <>
            <div className='section-header'>
                <h3 className='section-header--title'>{title}</h3>
                <h3 className='section-header--text' ref={animatedTextRef}>{text}</h3>
            </div>
        </>
    );
}

export default SectionHeader;