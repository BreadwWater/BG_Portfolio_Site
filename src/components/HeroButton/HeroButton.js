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
                    offset={-80}
                    duration={500}
                    className='hero-btn--opt'>
                    Contact
                </ScrollLink>
                <div className='hero-btn--divider'>

                </div>
                <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className='hero-btn--opt'>
                    Projects
                </ScrollLink>
            </div>
        </>
    );
}

export default HeroButton;