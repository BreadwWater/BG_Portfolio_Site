import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../ContactMe/ContactMe.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactIconAnim from '../../assets/animated icons/contact-animated-icon.gif';
import ContactIconStatic from '../../assets/animated icons/contact-icon.svg';
import Resume from '../../assets/pdf/Brenda_Gonzalez_Resume.pdf';

function ContactMe() {
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [subjectName, setSubjectName] = React.useState('');
    const [messageSent, setMessageSent] = React.useState(false);
    const form = useRef();

    const handleReplaceSrc = () => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const iconElement = document.querySelector('.contact__header--icon');
            iconElement.setAttribute('src', ContactIconStatic);
        }
    };

    useEffect(() => {
        handleReplaceSrc();
    }, []);

    //Sends form to email; Email.js API val
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_bjdodc9', 'template_tnmdljj', form.current, {
                publicKey: 'X6UsTu0nQpvrN_uj1',
            })

            .then(() => {
                setMessageSent(true);
                setUserName('');
                setUserEmail('');
                setSubjectName('');
            })
    };
    const handleUserNameChange = (e) => {
        const value = e.target.value.slice(0, 28);
        setUserName(value);
    };

    const handleUserEmailChange = (e) => {
        const value = e.target.value.slice(0, 45);
        setUserEmail(value);
    };

    const handleSubjectNameChange = (e) => {
        const value = e.target.value.slice(0, 151);
        setSubjectName(value);
    };

    const handleDownloadResume = () => {
        const resumeUrl = Resume;
        const resumeFilename = 'Brenda_Gonzalez_Resume.pdf';

        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = resumeFilename;
        link.click();
    };

    const handleViewResume = () => {
        const newWindow = window.open(Resume, '_blank');
        newWindow.opener = null; // Prevents the opened window from controlling the original window
    };

    return (
        <>
            <section id="contact" className="contact">
                <div className="contact__header">
                    <img className="contact__header--icon" src={ContactIconAnim} alt="Contact icon" />
                    <h3 className="contact__header--text">Contact</h3>
                    <SectionHeader title="Where" text="Contact" />
                </div>
                <p className="contact__title">Reach out to me by email or by contacting me on
                    <a
                        href="https://www.linkedin.com/in/bren-gonzalez/"
                        className="contact__title--link"
                        target="_blank"
                        rel="noopener noreferrer">
                        other platforms!</a>
                </p>
                <form className="contact__form" ref={form} onSubmit={sendEmail}>
                    <label className="contact__label" htmlFor="user_name">
                        First Name
                        {userName.length >= 28 && <span className="contact__limit-msg">* Maximum characters reached</span>}
                    </label>
                    <input
                        type="text"
                        id="user_name"
                        placeholder="Enter First Name"
                        className="contact__label--input"
                        name="user_name"
                        value={userName}
                        onChange={handleUserNameChange}
                        autoComplete='true'
                        required
                    />

                    <label className="contact__label" htmlFor="user_email">
                        Email
                        {userEmail.length >= 45 && <span className="contact__limit-msg">* Maximum characters reached</span>}
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        id="user_email"
                        className="contact__label--input"
                        name="user_email"
                        value={userEmail}
                        onChange={handleUserEmailChange}
                        required
                        autoComplete='true'
                    />

                    <label className="contact__label" htmlFor="message">
                        Subject
                        {subjectName.length >= 151 && <span className="contact__limit-msg">* Maximum characters reached</span>}
                    </label>
                    <textarea
                        type="text"
                        placeholder="What's This About?"
                        id="message"
                        className="contact__label--input"
                        name="message"
                        value={subjectName}
                        onChange={handleSubjectNameChange}
                        required
                        autoComplete='true'
                    />
                    <div className="contact__btn">
                        {messageSent ? (
                            <button className="contact__btn--submit" disabled>
                                Message Sent!
                            </button>
                        ) : (
                            <button
                                className="contact__btn--submit"
                                type="submit"
                                value="Send"
                                disabled={messageSent}
                            >
                                Contact
                            </button>
                        )}
                    </div>
                </form>
                <p className="contact__title"> or <br /> View/Download my Resume now!</p>
                <div className="contact__btn">
                    <button className='contact__btn--resume' text={'View'} onClick={handleViewResume} >View</button>
                    <button className='contact__btn--resume' text={'Download'} onClick={handleDownloadResume} >Download</button>
                </div>
            </section>
        </>
    );
}

export default ContactMe;
