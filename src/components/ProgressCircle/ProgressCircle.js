import React, { useState, useEffect, useRef } from 'react';
import './ProgressCircle.scss';

function ProgressCircle({ name, value, img }) {
    const [progress, setProgress] = useState(0);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const progressRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsIntersecting(entry.isIntersecting);
        });

        observer.observe(progressRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) {
                setProgress(value);
            } else {
                const speed = 1.5; // Adjust Speed of Progress
                const interval = setInterval(() => {
                    setProgress((prevProgress) => {
                        const increment = value / (100 * speed);
                        const nextProgress = prevProgress + increment;
                        return nextProgress >= value ? value : nextProgress;
                    });
                }, 10);

                return () => clearInterval(interval);
            }
        } else {
            setProgress(0);
        }
    }, [isIntersecting, value]);

    const getBackgroundStyle = () => {
        const degrees = 360 - progress * 3.6;
        return `conic-gradient(from 359deg, #D1C5C2 0deg, #D1C5C2 ${degrees}deg, #E9A18B ${degrees}deg, #E9A18B 360deg)`;
    };


    return (
        <div className="progress-bar" ref={progressRef}>
            <p className="progress-bar__value">{Math.round(progress)}%</p>
            <div className="progress-bar__cont" style={{ background: getBackgroundStyle() }}>
                <img className="progress-bar--img" src={img} alt="Tech Icon" />
            </div>
            <p className="progress-bar__text">{name}</p>
        </div>
    );
}

export default ProgressCircle;
