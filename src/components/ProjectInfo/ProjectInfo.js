import { useNavigate } from 'react-router-dom';
import './ProjectInfo.scss';
import PhotoSec from '../PhotoSec/PhotoSec';
import StackTag from '../StackTag/StackTag';

// import arrow from '../../assets/icons/arrow--icon.svg';

function ProjectInfo(props) {
    const { projTitle, projHero, projType, projDesc, projectImages, projKeyword, stackTags } = props;
    const navigate = useNavigate();

    const scrollToContact = () => {
        navigate('/#contact');
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
                    <h2 className='ProjectPage_services--title'>Project Tools/Services</h2>
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
                            <p className='ProjectPage_contact--text'>
                                Have a project you’re working on that needs a Front-End developer? How about a logo for your new company- or maybe you want to solidify your visual identity; if you’re interested in my work, please reach out!
                            </p>
                            <button onClick={scrollToContact} className='ProjectPage_contact--btn'>Contact</button>
                        </div>
                        <div className='ProjectPage_contact--group'>
                            {/* LAST & NEXT PROJECT BUTTONS W.I.P  */}

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