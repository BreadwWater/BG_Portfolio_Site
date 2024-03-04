import './IndivProj.scss';
import hero_pic from '../../assets/images/Stairbox-hero.jpg';
import img1 from '../../assets/images/StairBox_Main.jpg';
import img2 from '../../assets/images/StairBox_Logo-1.jpg';
import img3 from '../../assets/images/StairBox_Simple-1.jpg';

import arrow from '../../assets/icons/arrow--icon.svg';

import Button from '../../components/Button/Button';

function IndivProj() {
    return (
        <>
            <section className='indivproj'>
                <div className='indivproj_header'>
                    <h2 className='indivproj_header--text'>Project Type</h2>
                    <h1 className='indivproj_header--title'>Project Title</h1>
                    <img src={hero_pic} className='indivproj_header--hero' alt="{name} Hero pic" />
                </div>
                <div className='indivproj_desc'>
                    <h2 className='indivproj_desc--title'>Project Overview</h2>
                    <p className='indivproj_desc--text'>Lorem ipsum dolor sit amet conse adipisicing elit. Veritatis amet fugit perspiciatis derit officia saepe? Laudantium quam, labore ex natus beatae, eligendi illo molestias, officia dolorem voluptatum distinctio.
                        Animi id voluptas optio dignissimos? impedit fugiat sed! Adipisci, iusto. Excepturi, error ipsa.</p>
                </div>
                <div className='indivproj_services' >
                    <h2 className='indivproj_services--title'>Project Services</h2>
                    <div className='indivproj_services--group'>
                        <p className='indivproj_services--pill'>Logo Design</p>
                        <p className='indivproj_services--pill'>Visual Identity</p>
                        <p className='indivproj_services--pill'>Packaging</p>
                    </div>
                </div>
                <div className='indivproj_collage'>
                    <img className='indivproj_collage--img' src={img1} alt="Placeholder Img" />
                    <img className='indivproj_collage--img' src={img2} alt="Placeholder Img" />
                    <img className='indivproj_collage--img' src={img3} alt="Placeholder Img" />
                </div>
                <div className='indivproj_contact'>
                    <div className='indivproj_contact--group'>
                        <h2 className='indivproj_contact--title'>Let's Talk About Lorem.</h2>
                        <p className='indivproj_contact--text'>Lorem ipsum At laborum molestiae beatae officiis omnis! Let's get in touch!</p>
                        <button className='indivproj_contact--btn'>Contact</button>
                    </div>
                    <div className='indivproj_contact--group'>
                        <button className='indivproj_btn--last'>
                            <img className='indivproj_btn--arrow' src={arrow} alt="" />
                            Last Proj</button>
                        <button className='indivproj_btn--next'>
                            Next Proj
                            <img className='indivproj_btn--arrow' src={arrow} alt="" />
                        </button>
                    </div>
                </div>
            </section >
        </>
    );
}

export default IndivProj;