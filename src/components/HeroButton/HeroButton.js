import './HeroButton.scss';
import { Link as ScrollLink } from 'react-scroll';

function HeroButton() {
    return (
        <>
            <div className='hero-btn'>
                <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='hero-btn--opt'>
                    Contact
                </ScrollLink>

                <span className='hero-btn--divider'></span>

                <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='hero-btn--opt'>
                    Projects
                </ScrollLink>
            </div>
        </>
    );
}

export default HeroButton;