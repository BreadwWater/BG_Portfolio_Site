import React, { useEffect, useState } from 'react';
import './HomeSkeleton.scss';

function HomeSkeleton({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Disable scrolling while loading
        document.body.style.overflow = 'hidden';

        // Simulate content loading (replace this with your actual loading logic)
        const simulateContentLoading = () => {
            // Simulate loading delay (e.g., 3 seconds)
            setTimeout(() => {
                // Set loading state to false after content has loaded
                setLoading(false);
                // Enable scrolling when loading is complete
                document.body.style.overflow = 'auto';
            }, 800); // Adjust the delay as needed
        };

        // Call the function to simulate content loading
        simulateContentLoading();
    }, []); // Run effect only once on component mount

    return loading ? (
        <section className='skeleton'>
            <article className='skeleton__hero'>
                <div className='skeleton__content pulse-anim'></div>
                <div className='skeleton__content pulse-anim'></div>
                <div className='skeleton__content '>
                    <div className='skeleton__content--btn pulse-anim'></div>
                    <div className='skeleton__content--btn pulse-anim'></div>
                </div>
            </article>

            <article className='skeleton__aboutme'>
                <div className='skeleton__aboutme--content'>
                    <div className='skeleton__aboutme--title pulse-anim'></div>
                    <div className='skeleton__aboutme--group'>
                        <div className='skeleton__aboutme--text'>
                            <div className='skeleton__aboutme--desc pulse-anim'></div>
                            <div className='skeleton__aboutme--points pulse-anim'></div>
                            <div className='skeleton__aboutme--points pulse-anim'></div>
                            <div className='skeleton__aboutme--points pulse-anim'></div>
                        </div>
                        <div className='skeleton__aboutme--img pulse-anim'></div>
                    </div>
                </div>
            </article>
        </section>
    ) : (
        // Render children once loading is complete
        children
    );
}

export default HomeSkeleton;
