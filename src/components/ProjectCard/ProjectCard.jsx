import React from 'react';
import "./ProjectCard.css"

const ProjectCard = (props) => {
    const {title, description, projectLink, websiteLink, image, techStack} = props.project
    
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt="Project Screenshot"/>
            </div>
            <div className="project-content">
                <div>
                    <h2 className="project-title">{title}</h2>
                    <div className="project-description">
                        <div><strong>Tech Stack: </strong>{techStack.join(', ')}</div>
                        <div><strong>Description: </strong>{description}</div>
                    </div>
                </div>
                <div className="project-links">
                    <a href={websiteLink} target="_blank">Preview</a>
                    <a href={projectLink} target="_blank">Repository</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;