import './ProjCard.scss';

import { Link } from 'react-router-dom';


function ProjCard({ Title, Desc, Thumb, projectId, projLink }) {
    return (
        <>
            <section className='projCard'>
                <Link to={`/project/${projLink}`} className='projCard__cont'>
                    <img className='projCard--img' src={Thumb} alt={`${Title} Project Thumbnail`} />
                    <div className='projCard__body'>
                        <h3 className='projCard__title'>{Title}</h3>
                        <p className='projCard__desc'>{Desc}</p>
                    </div>
                </Link>
            </section>
        </>
    );
}

export default ProjCard;