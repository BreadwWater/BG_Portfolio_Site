import './ProjectPage.scss';
import img1 from '../../assets/images/StairBox_Main.jpg';
import img2 from '../../assets/images/StairBox_Logo-1.jpg';
import img3 from '../../assets/images/StairBox_Simple-1.jpg';

import arrow from '../../assets/icons/arrow--icon.svg';

function ProjectPage(props) {
    const { Title, Type, Desc, HeroImg } = props;
    return (
        <>
            <section className='ProjectPage'>
                <div className='ProjectPage_header--hero'>
                    <div className='ProjectPage_header'>
                        <h2 className='ProjectPage_header--text'>{Type}</h2>
                        <h1 className='ProjectPage_header--title'>{Title}</h1>
                    </div>
                </div>
                <div className='ProjectPage_desc'>
                    <h2 className='ProjectPage_desc--title'>Project Overview</h2>
                    <p className='ProjectPage_desc--text'>{Desc}</p>
                </div>
                <div className='ProjectPage_services' >
                    <h2 className='ProjectPage_services--title'>Project Services</h2>
                    <div className='ProjectPage_services--group'>
                        <p className='ProjectPage_services--tag'>Logo Design</p>
                        <p className='ProjectPage_services--tag'>Visual Identity</p>
                        <p className='ProjectPage_services--tag'>Packaging</p>
                    </div>
                </div>

                <div className='ProjectPage_group'>
                    <div className='ProjectPage_collage'>
                        <img className='ProjectPage_collage--img' src={img1} alt="Project img 1" />
                        <div className='ProjectPage_collage--collection'>
                            <img className='ProjectPage_collage--img' src={img2} alt="Project img 2" />
                            <img className='ProjectPage_collage--img' src={img3} alt="Project img 3" />
                        </div>
                        <img className='ProjectPage_collage--img' src={img1} alt="Project img 4" />
                        <div className='ProjectPage_collage--collection'>
                            <img className='ProjectPage_collage--img' src={img2} alt="Project img 5" />
                            <img className='ProjectPage_collage--img' src={img3} alt="Project img 6" />
                        </div>
                        <img className='ProjectPage_collage--img' src={img1} alt="Project img 7" />
                        {/* <div className='ProjectPage_collage--collection'>
                            <img className='ProjectPage_collage--img' src={img2} alt="Project img 8" />
                            <img className='ProjectPage_collage--img' src={img1} alt="Project img 9" />
                        </div>
                        <img className='ProjectPage_collage--img' src={img2} alt="Project img 10" /> */}
                    </div>
                    <div className='ProjectPage_contact'>
                        <div className='ProjectPage_contact--group'>
                            <h2 className='ProjectPage_contact--title'>Let's Talk Logos.</h2>
                            <p className='ProjectPage_contact--text'>Have a logo that needs updating? How about a logo for your new company, or maybe you want to solidify your visual identity.
                                Have a logo that needs updating? How about a logo for your new company.</p>
                            <button className='ProjectPage_contact--btn'>Contact</button>
                        </div>
                        <div className='ProjectPage_contact--group'>
                            <button className='ProjectPage_btn--last'>
                                <img className='ProjectPage_btn--arrow' src={arrow} alt="" />
                                Last Project
                            </button>
                            <button className='ProjectPage_btn--next'>
                                Next Project
                                <img className='ProjectPage_btn--arrow' src={arrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default ProjectPage;