import './IndivProj.scss';
import img1 from '../../assets/images/StairBox_Main.jpg';
import img2 from '../../assets/images/StairBox_Logo-1.jpg';
import img3 from '../../assets/images/StairBox_Simple-1.jpg';

import arrow from '../../assets/icons/arrow--icon.svg';


function IndivProj(props) {
    // const { Title, Type, Desc, HeroImg } = props;
    return (
        <>
            <section className='indivproj'>
                <div className='indivproj_header--hero'>
                    <div className='indivproj_header'>
                        <h2 className='indivproj_header--text'>Project Type</h2>
                        <h1 className='indivproj_header--title'>Project Title</h1>
                    </div>
                </div>
                <div className='indivproj_desc'>
                    <h2 className='indivproj_desc--title'>Project Overview</h2>
                    <p className='indivproj_desc--text'>Lorem ipsum dolor sit amet conse adipisicing elit. Veritatis amet fugit perspiciatis derit officia saepe? Laudantium quam, labore ex natus beatae, eligendi illo molestias, officia dolorem voluptatum distinctio.
                        Animi id voluptas optio dignissimos? impedit fugiat sed! Adipisci, iusto. Excepturi, error ipsa. Lorem ipsum dolor sit amet conse adipisicing elit. Veritatis amet fugit perspiciatis derit officia saepe? Laudantium quam, labore ex natus beatae, eligendi illo molestias, officia dolorem voluptatum distinctio.
                        Animi id voluptas optio dignissimos? impedit fugiat sed! Adipisci, iusto. Excepturi, error ipsa.</p>
                </div>
                <div className='indivproj_services' >
                    <h2 className='indivproj_services--title'>Project Services</h2>
                    <div className='indivproj_services--group'>
                        <p className='indivproj_services--tag'>Logo Design</p>
                        <p className='indivproj_services--tag'>Visual Identity</p>
                        <p className='indivproj_services--tag'>Packaging</p>
                    </div>
                </div>

                <div className='indivproj_group'>
                    <div className='indivproj_collage'>
                        <img className='indivproj_collage--img' src={img1} alt="Project img 1" />
                        <div className='indivproj_collage--collection'>
                            <img className='indivproj_collage--img' src={img2} alt="Project img 2" />
                            <img className='indivproj_collage--img' src={img3} alt="Project img 3" />
                        </div>
                        <img className='indivproj_collage--img' src={img1} alt="Project img 4" />
                        <div className='indivproj_collage--collection'>
                            <img className='indivproj_collage--img' src={img2} alt="Project img 5" />
                            <img className='indivproj_collage--img' src={img3} alt="Project img 6" />
                        </div>
                        <img className='indivproj_collage--img' src={img1} alt="Project img 7" />
                        <div className='indivproj_collage--collection'>
                            <img className='indivproj_collage--img' src={img2} alt="Project img 8" />
                            <img className='indivproj_collage--img' src={img1} alt="Project img 9" />
                        </div>
                        <img className='indivproj_collage--img' src={img2} alt="Project img 10" />
                    </div>
                    <div className='indivproj_contact'>
                        <div className='indivproj_contact--group'>
                            <h2 className='indivproj_contact--title'>Let's Talk Logos.</h2>
                            <p className='indivproj_contact--text'>Have a logo that needs updating? How about a logo for your new company, or maybe you want to solidify your visual identity.
                                Have a logo that needs updating? How about a logo for your new company.</p>
                            <button className='indivproj_contact--btn'>Contact</button>
                        </div>
                        <div className='indivproj_contact--group'>
                            <button className='indivproj_btn--last'>
                                <img className='indivproj_btn--arrow' src={arrow} alt="" />
                                Last Project
                            </button>
                            <button className='indivproj_btn--next'>
                                Next Project
                                <img className='indivproj_btn--arrow' src={arrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default IndivProj;