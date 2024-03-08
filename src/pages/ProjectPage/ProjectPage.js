import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import './ProjectPage.scss';

function ProjectPage() {
    const { projectId } = useParams();
    const [projTitle, setProjTitle] = useState('');
    const [projDesc, setProjDesc] = useState('');
    const [projType, setProjType] = useState('');
    const [projImages, setProjImages] = useState([]);

    useEffect(() => {
        if (projectId === 'stairbox') {
            setProjTitle('My Project');
            setProjDesc('This is the description');
            setProjType('ooloo');

            setProjTitle('My Project');
            setProjDesc('This is the description');
            setProjType('ooloo');

            // Dynamically import images from the specified project folder
            const importImages = (count) => {
                return Array.from({ length: count }, (_, index) => {
                    return import(`../../assets/images/project-1/image-${index + 1}.jpg`)
                        .then(module => module.default);
                });
            };

            Promise.all(importImages(7))
                .then(images => setProjImages(images))
                .catch(error => console.error('Error loading images:', error));
        }

        else if (projectId === 'placeholder') {
            setProjTitle('My Project');
            setProjDesc('This is the description');
            setProjType('ooloo');
            setProjImages([])
        }

    }, [projectId]);
    useEffect(() => {
        console.log('Inside useEffect', projImages);
        // Rest of the code...
    }, [projectId]);
    return (
        <>
            <ProjectInfo
                projTitle={projTitle}
                projType={projType}
                projDesc={projDesc}
                projectImages={projImages}
            />
        </>
    );
}

export default ProjectPage;
