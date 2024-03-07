import './Skeleton.scss';

function Skeleton() {
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