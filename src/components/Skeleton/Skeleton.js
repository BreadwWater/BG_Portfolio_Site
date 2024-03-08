import './Skeleton.scss';

function Skeleton() {
    // Function to disable scrolling
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    // Function to enable scrolling
    function enableScroll() {
        document.body.style.overflow = 'auto';
    }

    // Simulate content loading (replace this with your actual loading logic)
    function simulateContentLoading() {
        // Disable scrolling when content is loading
        disableScroll();

        // Simulate loading delay (e.g., 3 seconds)
        setTimeout(() => {
            // Enable scrolling after the content has loaded
            enableScroll();
        }, 3000); // Adjust the delay as needed
    }

    // Call the function to simulate content loading
    simulateContentLoading();

    return (
        <>
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
        </>
    );
}

export default Skeleton;