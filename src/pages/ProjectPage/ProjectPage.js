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
    const [projKeyword, setProjKeyword] = useState('');
    const [stackTags, setStackTags] = useState([]);

    // Dynamically import images from the Design project folder
    const importImagesDesign = (folderName, count) => {
        return Array.from({ length: count }, (_, index) => {
            return import(`../../assets/images/projects/design/${folderName}/image-${index + 1}.jpg`)
                .then(module => module.default);
        });
    };

    //Create/Replace if statement for new design projects & give required info
    useEffect(() => {
        window.scrollTo(0, 0)
        if (projectId === `stairbox`) {
            setProjTitle(`StairBox`);
            setProjHero(require('../../assets/images/projects/design/project-1/image-0.png'));
            setProjDesc(`Stairbox is the largest and most trusted staircase manufacturer in the UK. This was kept in mind when designing the logo as well as keeping it faithful to the original concept of stairs within a box. The box and logo symbol are uniquely identifiable by shape and color scheme, and typography was kept in mind when choosing the font. The goal was to encapsulate the ‘everyman’ brand archetype by use of color and light rounded styling as well as keeping it light but sturdy, friendly and reliable.`);
            setProjType(`Logo Revision`);
            setProjKeyword(`logo's`);
            setStackTags([`Logo Redesign`, `Branding Update`, `Figma`, `Illustrator`]);

            Promise.all(importImagesDesign('project-1', 10))
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
        else if (projectId === `letschill`) {
            setProjTitle(`Let's Chill`);
            setProjHero(require('../../assets/images/projects/design/project-2/image-0.png'));
            setProjDesc(`This humble veteran owned parlor is home to South Florida's best Homemade Ice Cream and is Voted #2 on Top 100 Best Ice Cream Shops in America on Yelp. The aim for this rebranding was to maintain a distinct look that would fashion as both curb appeal to a general audience as well as high customer identification. The approach to this was to highlight the peace sign to give a sense of comfort and belonging to the customer; the color palette is meant to exude both a comforting feeling and a modern edge. Complementing this is a chic product design featuring a wavy esthetic to add a touch of whimsy to the experience. A mockup advertisement is included to showcase the product cup in use to display a new flavor that leaves an inviting but exciting tone as to encourage customers to indulge in a truly unique frozen treat experience.`);
            setProjType(`Brand Update`);
            setProjKeyword(`rebranding`);
            setStackTags([`Logo Redesign`, `Visual Identity`, `Packaging`, `Figma`, `Illustrator`]);

            Promise.all(importImagesDesign('project-2', 10))
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
        else if (projectId === `eternalframes`) {
            setProjTitle(`Eternal Frames`);
            setProjHero(require('../../assets/images/projects/design/project-3/image-0.png'));
            setProjDesc(`Eternal Frames is a small local framing studio located in the countryside of England that I came across during my stay. This was a simple logo redesign meant to practice taking recognizable wording and implementing the idea one may picture in their mind and making it into an image. This was part of self study while taking the Calarts Fundamentals of Graphic Design refresher course and one of the first projects I used various strokes to mimic depth in a logo.`);
            setProjType(`Logo Revision`);
            setProjKeyword(`logo's`);
            setStackTags([`Logo Redesign`, `Figma`, `Illustrator`]);

            Promise.all(importImagesDesign('project-3', 4))
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
        else if (projectId === `myportfolio`) {
            setProjTitle(`Personal Portfolio Website`);
            setProjHero(require('../../assets/images/projects/design/project-4/image-0.png'));
            setProjDesc(`The design of my portfolio website has gone through various stages while I discover what parts of my personality and interests I wish to highlight. At first, it started off as quirky and unserious, since I wanted to give off a fun and light-hearted impression, but as my skills and insights expanded, so did my vision; thus I found myself drawn to bold and artistic design elements. I wanted to define my online identity as a mix between modern minimalism and expressive creativity and I hoped to have achieved just that, which is the genesis of the current iteration of my website; complete with a simplistic abstract parallaxing mountain range that symbolizes my love for simple, clean, and effective design.`);
            setProjType(`Website Design`);
            setProjKeyword(`Websites`);
            setStackTags([`Website Design`, `Logo Redesign`, `Figma`, `Illustrator`, `React`, `JSX`, `SCSS`]);

            Promise.all(importImagesDesign('project-4', 6))
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
        else if (projectId === `odysseycruisline`) {
            setProjTitle(`Odyssey Cruisline`);
            setProjHero(require('../../assets/images/projects/design/project-5/image-0.png'));
            setProjDesc(`This project was part of a 2 day design sprint challenge in creating a travel site and was inspired by my love of cruises! By combining my love for cruises and Greek philosophy, I planned and designed the Home page and Explore page. There are many things I wish to improve later as this was part of my first ever design sprint, I have gained much more experience and knowledge since then, and hope to come back to this idea soon.`);
            setProjType(`Website Design`);
            setProjKeyword(`Websites`);
            setStackTags([`Website Design`, `Illustrator`, `Photoshop`]);

            Promise.all(importImagesDesign('project-5', 4))
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
        else if (projectId === `raccoon3d`) {
            setProjTitle(`Bread Raccoon`);
            setProjHero(require('../../assets/images/projects/design/project-6/image-0.png'));
            setProjDesc(`A 3D model of a raccoon character carrying a basket of bread; this was originally meant to serve as a personal mascot but after deciding to take another lane esthetic wise, he is now just a fun idea I cooked up in between modeling mockups.`);
            setProjType(`3D Model`);
            setProjKeyword(`3d Models`);
            setStackTags([`AutoDesk Maya`, `Photoshop`]);

            Promise.all(importImagesDesign('project-6', 6))
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


    // Dynamically import images from the Code project folder
    const importImagesCode = (folderName, count) => {
        return Array.from({ length: count }, (_, index) => {
            return import(`../../assets/images/projects/code/${folderName}/image-${index + 1}.jpg`)
                .then(module => module.default);
        });
    };

    //Create/Replace if statement for new code projects & give required info
    useEffect(() => {
        window.scrollTo(0, 0)
        if (projectId === `fetchfind`) {
            setProjTitle(`Fetch Find`);
            setProjHero(require('../../assets/images/projects/code/project-1/image-0.png'));
            setProjDesc(`This website was my final project while in the Brainstation bootcamp; it was the first time we had full reign's to create an application that could show our abilities. I focused on highlighting the design of the website, drawing from my background in commercial art and product design; I created all the assets and animation used in its development.`);
            setProjType(`Website`);
            setProjKeyword(`React Projects`);
            setStackTags([`React`, `JSX`, `SCSS`, `Figma`]);

            Promise.all(importImagesCode('project-1', 1))
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
                projKeyword={projKeyword}
                projectImages={projImages}
                stackTags={stackTags}
            />
        </>
    );
}

export default ProjectPage;
