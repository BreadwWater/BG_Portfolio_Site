import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import './IndivProject.scss';

import ArrowIcon from '../../assets/icons/arrow--icon.svg';
import ModalDesc from '../ModalDesc/ModalDesc';

function IndivProject({ Title, Thumb, DescShort, Imgs, DescLarge, url }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentModalIndex, setCurrentModalIndex] = useState(0);
    const modalRef = useRef(null);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handlePrevModal = (event) => {
        event.stopPropagation(); // Stop the event propagation
        setCurrentModalIndex((prevIndex) => (prevIndex === 0 ? Imgs.length - 1 : prevIndex - 1));
    };

    const handleNextModal = (event) => {
        event.stopPropagation(); // Stop the event propagation
        setCurrentModalIndex((prevIndex) => (prevIndex === Imgs.length - 1 ? 0 : prevIndex + 1));
    };


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isModalOpen]);

    useEffect(() => {
        // Add or remove a CSS class to the body element to disable scrolling
        const bodyElement = document.querySelector('body');
        if (isModalOpen) {
            bodyElement.classList.add('indiv__modal-open');
        } else {
            bodyElement.classList.remove('indiv__modal-open');
        }

        // Clean up the effect by removing the CSS class on component unmount
        return () => {
            bodyElement.classList.remove('indiv__modal-open');
        };
    }, [isModalOpen]);

    if (Imgs.length === 0) {
        return (
            <section className='indiv'>
                <Link to={url} className='indiv__cont'>
                    <div className='indiv__header'>
                        <img className='indiv__img' src={Thumb} alt={`${Title} Project Thumbnail`} />
                        <div className='indiv__body'>
                            <h3 className='indiv__title'>{Title}</h3>
                            <p className='indiv__desc'>{DescShort}</p>
                        </div>
                    </div>
                    <div className='indiv__body'>
                        <h3 className='indiv__title'>{Title}</h3>
                        <p className='indiv__desc'>{DescLarge}</p>
                    </div>
                </Link>
            </section>
        );
    }

    const handleModalContainerClick = (event) => {
        // Check if the clicked element, its parent, or its grandparent has the class indiv__modal--btns or indiv__modal--img
        if (
            event.target.classList.contains('indiv__modal--btns') ||
            event.target.closest('.indiv__modal--btns') ||
            event.target.classList.contains('indiv__modal--img') ||
            event.target.closest('.indiv__modal--img') ||
            event.target.classList.contains('modaldesc') ||
            event.target.closest('.modaldesc')
        ) {
            return; // Ignore the click event
        }

        handleCloseModal();
    };


    return (
        <>
            <section className='indiv'>
                <Link to={url} className='indiv__cont'>
                    <div className='indiv__header' onClick={handleOpenModal}>
                        <img className='indiv__img' src={Thumb} alt={`${Title} Project Thumbnail`} />
                        <div className='indiv__body'>
                            <h3 className='indiv__title'>{Title}</h3>
                            <p className='indiv__desc'>{DescShort}</p>
                        </div>
                    </div>
                    <div className='indiv__body'>
                        <h3 className='indiv__title'>{Title}</h3>
                        <p className='indiv__desc'>{DescLarge}</p>
                    </div>
                </Link>
            </section>

            {isModalOpen && (
                <div className='indiv__modal' ref={modalRef} onClick={handleModalContainerClick}>
                    <div className='indiv__modal--cont'>
                        <div className='indiv__modal--btns'>
                            <img className='indiv__modal--btns-prev' onClick={handlePrevModal} src={ArrowIcon} alt="Previous Icon" />
                            <img className='indiv__modal--btns-next' onClick={handleNextModal} src={ArrowIcon} alt="Next Icon" />
                        </div>
                        <img
                            className='indiv__modal--img'
                            src={Imgs[currentModalIndex]}
                            alt={`${Title} project pic`}
                        />
                        <ModalDesc Title={Title}></ModalDesc>
                    </div>
                </div>
            )}
        </>
    );
}

export default IndivProject;
