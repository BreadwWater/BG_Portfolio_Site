import { Link } from 'react-scroll';
import './IndivProject.scss';

function IndivProject({ Title, Img, DescShort, DescLarge, url }) {
    return (
        <>
            <section className='indiv'>
                <Link to={url} className='indiv__cont'>
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
                </Link>
            </section>
        </>
    );
}

export default IndivProject;