import { useState } from 'react';
import '../ContactMe/ContactMe.scss';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactIconAnim from '../../assets/animated icons/contact-animated-icon.gif';
import ContactIconStatic from '../../assets/animated icons/contact-icon.svg';

function ContactMe() {
    const [fullName, setFullName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [subjectName, setSubjectName] = useState('');

    const handleFullNameChange = (e) => {
        const value = e.target.value.slice(0, 28);
        setFullName(value);
    };

    const handleCompanyNameChange = (e) => {
        const value = e.target.value.slice(0, 46);
        setCompanyName(value);
    };

    const handleSubjectNameChange = (e) => {
        const value = e.target.value.slice(0, 151);
        setSubjectName(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailSubject = encodeURIComponent(subjectName);
        const emailBody = `Hey, this is ${fullName} from ${companyName}.`;

        const emailLink = `mailto:example@example.com?subject=${emailSubject}&body=${emailBody}`;

        const newWindow = window.open(emailLink, '_blank');

    };

    return (
        <>
            <section id='contact' className='contact'>
                <div className="contact__header">
                    <img className="contact__header--icon" src={ContactIconAnim} alt="Contact icon" />
                    <h3 className="contact__header--text">Contact</h3>
                    <SectionHeader title='Where' text='Contact' />
                </div>
                <p className='contact__title'>Reach out to me by email or by contacting me on other platforms!</p>
                <form action="" className='contact__form' onSubmit={handleSubmit}>
                    <label className='contact__label' htmlFor="full-name">
                        First Name
                        {fullName.length >= 28 && <span className="contact__limit-msg">* Maximum characters reached</span>}
                    </label>
                    <input
                        type='text'
                        placeholder='Enter First Name'
                        id='full-name'
                        className='contact__label--input'
                        name='first-name'
                        value={fullName}
                        onChange={handleFullNameChange}
                        required
                    />

                    <label className='contact__label' htmlFor='company-name'>
                        Company/Startup
                        {companyName.length >= 46 && <span className='contact__limit-msg'>* Maximum characters reached</span>}
                    </label>
                    <input
                        type='text'
                        placeholder='Company Name'
                        id='company-name'
                        className='contact__label--input'
                        name='company-name'
                        value={companyName}
                        onChange={handleCompanyNameChange}
                        required
                    />

                    <label className='contact__label' htmlFor='subject-name'>
                        Subject
                        {subjectName.length >= 151 && <span className='contact__limit-msg'>* Maximum characters reached</span>}
                    </label>
                    <textarea
                        type='text'
                        placeholder="What's This About?"
                        id='subject-name'
                        className='contact__label--input'
                        name='subject-name'
                        value={subjectName}
                        onChange={handleSubjectNameChange}
                        required
                    />

                    <div className='contact__btn'>
                        <Button newId={'btn--active'} type='submit' text={'Contact'} />
                    </div>
                </form>
                <p className='contact__title'>or</p>
                <p className='contact__title'>Fill out this quick form to get my Resume now!</p>
                <div className='contact__btn'>
                    <Button newId={'btn--active'} text={'Request'} url={'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'} />
                </div>
            </section>
        </>
    );
}

export default ContactMe;

