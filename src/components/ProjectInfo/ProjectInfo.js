import { animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import './ProjectInfo.scss';
import PhotoSec from '../PhotoSec/PhotoSec';
import StackTag from '../StackTag/StackTag';

// import arrow from '../../assets/icons/arrow--icon.svg';

function ProjectInfo(props) {
    const { projTitle, projHero, projType, projDesc, projectImages, projKeyword, stackTags } = props;
    const location = useLocation();

    const scrollToContact = () => {
        if (location.pathname === '/') {
            // If on the home page, scroll to the top
            scroll.scrollTo(2700, { smooth: true, });
        } else {
            // If on another page, navigate to the home page
            window.location.href = '/';
        }
    };

    return (
        <>
            <section className='ProjectPage'>
                <div className='ProjectPage_header--hero' style={{ backgroundImage: `url(${projHero})` }}>
                    <div className='ProjectPage_header'>
                        <h2 className='ProjectPage_header--text'>{projType}</h2>
                        <h1 className='ProjectPage_header--title'>{projTitle}</h1>
                    </div>
                </div>
                <div className='ProjectPage_desc'>
                    <h2 className='ProjectPage_desc--title'>Project Overview</h2>
                    <p className='ProjectPage_desc--text'>{projDesc}</p>
                </div>
                <div className='ProjectPage_services' >
                    <h2 className='ProjectPage_services--title'>Project Services</h2>
                    <div className='ProjectPage_services--group'>
                        {stackTags.map((tag, index) => (
                            <StackTag key={index} tag={tag} />
                        ))}
                    </div>
                </div>

                <div className='ProjectPage_group'>

                    <PhotoSec projectImages={projectImages} />

                    <div className='ProjectPage_contact'>
                        <div className='ProjectPage_contact--group'>
                            <h2 className='ProjectPage_contact--title'>Let's Talk <span className='ProjectPage_contact--keyword'>{projKeyword}</span>.</h2>
                            <p className='ProjectPage_contact--text'>Have a logo that needs updating? How about a logo for your new company, or maybe you want to solidify your visual identity.
                                Have a logo that needs updating? How about a logo for your new company.</p>
                            <button onClick={scrollToContact} className='ProjectPage_contact--btn'>Contact</button>
                        </div>
                        <div className='ProjectPage_contact--group'>
                            {/* <button className='ProjectPage_btn--last'>
                                <img className='ProjectPage_btn--arrow' src={arrow} alt="" />
                                Last Project
                            </button>
                            <button className='ProjectPage_btn--next'>
                                Next Project
                                <img className='ProjectPage_btn--arrow' src={arrow} alt="" />
                            </button> */}
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default ProjectInfo;