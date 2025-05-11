import React from 'react';
import {projects} from "../../data/projects.js";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

const ProjectList = () => {
    return (
        <div className="container">
            {
                projects.map(project =>
                    <ProjectCard
                        project={project}
                    />
                )
            }
        </div>
    );
};

export default ProjectList;