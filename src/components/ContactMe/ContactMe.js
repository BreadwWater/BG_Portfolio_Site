import React, { useEffect } from 'react';
import '../ContactMe/ContactMe.scss';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactIconAnim from '../../assets/animated icons/contact-animated-icon.gif';
import ContactIconStatic from '../../assets/animated icons/contact-icon.svg';
import Resume from '../../assets/pdf/Brenda_Gonzalez_Resume.pdf';

function ContactMe() {
    const [fullName, setFullName] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [subjectName, setSubjectName] = React.useState('');

    const handleReplaceSrc = () => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const iconElement = document.querySelector('.contact__header--icon');
            iconElement.setAttribute('src', ContactIconStatic);
        }
    };

    useEffect(() => {
        handleReplaceSrc();
    }, []);

    const handleFullNameChange = (e) => {
        const value = e.target.value.slice(0, 28);
        setFullName(value);
    };

    const handleCompanyNameChange = (e) => {
        const value = e.target.value.slice(0, 34);
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

        const emailLink = `mailto:bren.gonzalez1926@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        const newWindow = window.open(emailLink, '_blank');
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
                <p className="contact__title">Reach out to me by email or by contacting me on other platforms!</p>
                <form action="" className="contact__form" onSubmit={handleSubmit}>
                    <label className="contact__label" htmlFor="full-name">
                        First Name
                        {fullName.length >= 28 && <span className="contact__limit-msg">* Maximum characters reached</span>}
                    </label>
                    <input
                        type="text"
                        placeholder="Enter First Name"
                        id="full-name"
                        className="contact__label--input"
                        name="first-name"
                        value={fullName}
                        onChange={handleFullNameChange}
                        required
                    />

                    <label className="contact__label" htmlFor="company-name">
                        Company/Startup
                        {companyName.length >= 34 && <span className="contact__limit-msg">* Maximum characters reached</span>}
                    </label>
                    <input
                        type="text"
                        placeholder="Company Name"
                        id="company-name"
                        className="contact__label--input"
                        name="company-name"
                        value={companyName}
                        onChange={handleCompanyNameChange}
                        required
                    />

                    <label className="contact__label" htmlFor="subject-name">
                        Subject
                        {subjectName.length >= 151 && <span className="contact__limit-msg">* Maximum characters reached</span>}
                    </label>
                    <textarea
                        type="text"
                        placeholder="What's This About?"
                        id="subject-name"
                        className="contact__label--input"
                        name="subject-name"
                        value={subjectName}
                        onChange={handleSubjectNameChange}
                        required
                    />

                    <div className="contact__btn">
                        <Button type="submit" text={'Contact'} />
                    </div>
                </form>
                <p className="contact__title">or</p>
                <p className="contact__title">View/Download my Resume now!</p>
                <div className="contact__btn">
                    <Button text={'View'} onClick={handleViewResume} />
                    <Button text={'Download'} onClick={handleDownloadResume} />
                </div>
            </section>
        </>
    );
}

export default ContactMe;
