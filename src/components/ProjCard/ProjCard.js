import './ProjCard.scss';

function ProjCard({ Title, Desc, img, link }) {
    return (
        <>
            <section className='projCard'>
                <a className='projCard__cont' href={`${link}`}>

                    <img className='projCard--img' src={img} alt={`${Title} Project Thumbnail`} />

                    <div className='projCard__body'>
                        <h3 className='projCard__title'>{Title}</h3>
                        <p className='projCard__desc'>{Desc}</p>
                    </div>
                </a>
            </section>
        </>
    );
}

export default ProjCard;