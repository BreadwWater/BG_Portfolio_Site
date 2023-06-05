import './IndivProject.scss';

function IndivProject({ Title, Img, DescShort, DescLarge }) {
    return (
        <>
            <section className='indiv'>
                <div className='indiv__header'>
                    <img className='indiv__img' src={Img} alt={`${Title} Project Thumbnail`} />
                    <div className='indiv__body'>
                        <h3 className='indiv__title'>{Title}</h3>
                        <p className='indiv__desc'>{DescShort}</p>
                    </div>
                </div>
                <div className='indiv__body'>
                    <h3 className='indiv__title'>{Title}</h3>
                    <p className='indiv__desc'>{DescLarge}</p>
                </div>
            </section>
        </>
    );
}

export default IndivProject;