import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import './ProjectPage.scss';

function ProjectPage() {
    const { projectId } = useParams();
    const [projTitle, setProjTitle] = useState('');
    const [projHero, setProjHero] = useState('');
    const [projDesc, setProjDesc] = useState('');
    const [projType, setProjType] = useState('');
    const [projImages, setProjImages] = useState([]);

    // Dynamically import images from the specified project folder
    const importImages = (folderName, count) => {
        return Array.from({ length: count }, (_, index) => {
            return import(`../../assets/images/projects/design/${folderName}/image-${index + 1}.jpg`)
                .then(module => module.default);
        });
    };
    //Create/Replace if statement for new projects & give required info
    useEffect(() => {
        window.scrollTo(0, 0)
        if (projectId === 'stairbox') {
            setProjTitle(`StairBox`);
            setProjHero(require('../../assets/images/projects/design/project-1/image-0.png'));
            setProjDesc('This is stair box, a company that has your stairs in mind.');
            setProjType('Logo Revision');

            Promise.all(importImages('project-1', 10))
                .then(images => {
                    // Organize images into collections
                    const collections = [];
                    for (let i = 0; i < images.length; i += 3) {
                        collections.push(images.slice(i, i + 3));
                    }
                    setProjImages(collections);
                })
                .catch(error => console.error('Error loading images:', error));
        }
        else if (projectId === 'letschill') {
            setProjTitle(`Let's Chill`);
            setProjHero(require('../../assets/images/projects/design/project-2/image-0.png'));
            setProjDesc('This is stair box, a company that has your stairs in mind.');
            setProjType('Logo Revision');

            Promise.all(importImages('project-2', 10))
                .then(images => {
                    // Organize images into collections
                    const collections = [];
                    for (let i = 0; i < images.length; i += 3) {
                        collections.push(images.slice(i, i + 3));
                    }
                    setProjImages(collections);
                })
                .catch(error => console.error('Error loading images:', error));
        }
        else if (projectId === 'eternalframes') {
            setProjTitle(`Eternal Frames`);
            setProjHero(require('../../assets/images/projects/design/project-3/image-0.png'));
            setProjDesc('This is stair box, a company that has your stairs in mind.');
            setProjType('Logo Revision');

            Promise.all(importImages('project-3', 4))
                .then(images => {
                    // Organize images into collections
                    const collections = [];
                    for (let i = 0; i < images.length; i += 3) {
                        collections.push(images.slice(i, i + 3));
                    }
                    setProjImages(collections);
                })
                .catch(error => console.error('Error loading images:', error));
        }
    }, [projectId]);

    return (
        <>
            <ProjectInfo
                projTitle={projTitle}
                projHero={projHero}
                projType={projType}
                projDesc={projDesc}
                projectImages={projImages}
            />
        </>
    );
}

export default ProjectPage;
