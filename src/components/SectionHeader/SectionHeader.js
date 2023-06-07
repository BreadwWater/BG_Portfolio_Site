import React, { useEffect, useRef } from 'react';
import './SectionHeader.scss';

function SectionHeader({ title, text }) {
    const animatedTextRef = useRef(null);

    useEffect(() => {
        const animatedText = animatedTextRef.current;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    animatedText.classList.add('animation--underline');
                } else {
                    animatedText.classList.remove('animation--underline');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection);

        observer.observe(animatedText);

        return () => {
            observer.unobserve(animatedText);
        };
    }, []);

    return (
        <div className="section-header">
            <h3 className="section-header--title">{title}</h3>
            <h4 className="section-header--text" ref={animatedTextRef}>
                {text}
            </h4>
        </div>
    );
}

export default SectionHeader;
