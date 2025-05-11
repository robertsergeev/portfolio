import './App.css'
import React from 'react';
import ProjectCard from "./components/ProjectCard/ProjectCard.jsx";
import {projects} from "./data/projects.js";

function App() {
    
    return (
        <>
            <header>
                <h1>Robert Sergeev</h1>
                <nav>
                    <ul>
                        <li><a href="">About me</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                {
                    projects.map(project =>
                        <ProjectCard
                            project={project}
                        />
                    )
                }
            </div>
        
        </>
    )
}

export default App
