import React, { useState, useEffect, useRef } from 'react';
import './PhotoSec.scss';

function PhotoSec({ projectImages }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Enable scrolling
        }

        return () => {
            document.body.style.overflow = ''; // Enable scrolling when component unmounts
        };
    }, [isModalOpen]);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        setIsZoomed(false); // Reset zoom state when closing modal
    };

    const handleOverlayClick = (event) => {
        if (event.target === modalRef.current) {
            // Only close modal if the background overlay is clicked
            closeModal();
        }
    };

    const handleImageClick = () => {
        setIsZoomed(!isZoomed); // Toggle zoom state
    };

    return (
        <>
            <div className='PhotoSec_collage'>
                {projectImages.map((collection, index) => (
                    <React.Fragment key={index}>
                        {/* Render the first image in the collection */}
                        {index % 1 === 0 && (
                            <img
                                className='PhotoSec_collage--img'
                                src={collection[0]}
                                alt={`Project img ${index + 1}-1`}
                                onClick={() => openModal(collection[0])}
                            />
                        )}
                        {/* Render the rest of the collection if it exists */}
                        {collection.length > 1 && (
                            <div className='PhotoSec_collage--collection'>
                                {collection.slice(1).map((image, subIndex) => (
                                    <img
                                        key={subIndex}
                                        className='PhotoSec_collage--img'
                                        src={image}
                                        alt={`Project img ${index + 1}-${subIndex + 2}`}
                                        onClick={() => openModal(image)}
                                    />
                                ))}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal__overlay" onClick={handleOverlayClick} ref={modalRef}>
                    <div className={`modal__content ${isZoomed ? 'zoomed' : ''}`} onClick={handleImageClick}>
                        <img className='modal__content--img' src={selectedImage} alt="Selected Project Img" />
                    </div>
                </div>
            )}
        </>
    );
}

export default PhotoSec;
