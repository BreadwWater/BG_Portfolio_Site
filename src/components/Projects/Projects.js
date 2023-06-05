import './Projects.scss';

import ProjIcon from '../../assets/animated icons/projects-animated-icon.gif';
import SectionHeader from '../SectionHeader/SectionHeader';

function Projects() {
    return (
        <>
            <section>
                <div className='projects__header'>
                    <img className='projects__header--icon' src={ProjIcon} alt="Projects icon" />
                    <h3 className='projects__header--text'>Projects</h3>
                    <SectionHeader title={'What'} text={'Projects'} />
                </div>

                <div className='projects__body'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, deserunt saepe ut numquam porro odit illum iusto magni expedita inventore aut reprehenderit dicta officia sequi repellendus cum corrupti itaque dolorem?</p>
                </div>
            </section>
        </>
    );
}

export default Projects;