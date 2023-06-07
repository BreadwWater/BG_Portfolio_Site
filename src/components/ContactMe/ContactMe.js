import { useState } from 'react';
import './ContactMe.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactIconAnim from '../../assets/animated icons/contact-animated-icon.gif';
import ContactIconStatic from '../../assets/animated icons/contact-icon.svg';

function ContactMe() {
    const [fullName, setFullName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [subjectName, setSubjectName] = useState('');

    return (
        <>
            <section id='contact' className='contact'>

                <div className="contact__header">
                    <img className="contact__header--icon" src={ContactIconAnim} alt="Contact icon" />
                    <h3 className="contact__header--text">Contact</h3>
                    <SectionHeader title='Where' text='Contact' />
                </div>
                <p className='contact__title'>Reach out to me by email or by contacting me on other platforms!</p>
                <form action="" className='contact__form'>

                    <label className='contact__label' htmlFor="full-name">Full Name:</label>
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        value={fullName}
                        required
                    />

                    <label className='contact__label' htmlFor="company-name">Company/Startup</label>
                    <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        value={companyName}
                        required
                    />

                    <label className='contact__label' htmlFor="subject-name">Subject</label>
                    <input
                        type="text"
                        id="subject-name"
                        name="subject-name"
                        value={subjectName}
                        required
                    />

                    <input className='contact__btn--contact' type="submit" value="Contact" />
                </form>
            </section>
        </>
    );
}

export default ContactMe;