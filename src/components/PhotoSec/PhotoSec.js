import React from 'react';
import './PhotoSec.scss';

function PhotoSec(props) {
    const { projectImages } = props;

    return (
        <div className='PhotoSec_collage'>
            {projectImages.map((collection, index) => (
                <React.Fragment key={index}>
                    {/* Render the first image in the collection */}
                    {index % 1 === 0 && (
                        <img
                            className='PhotoSec_collage--img'
                            src={collection[0]}
                            alt={`Project img ${index + 1}-1`}
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
                                />
                            ))}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default PhotoSec;