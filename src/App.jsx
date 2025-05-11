import './App.css'
import React from 'react';
import ProjectCard from "./components/ProjectCard/ProjectCard.jsx";
import {projects} from "./data/projects.js";
import {Link, Route, Routes} from "react-router-dom";
import ProjectList from "./components/ProjectList/ProjectList.jsx";
import AboutPage from "./components/AboutPage/AboutPage.jsx";

function App() {
    
    return (
        <>
            <header>
                <h1>Robert Sergeev</h1>
                <nav>
                    <ul>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<ProjectList />}/>
                <Route path='/projects' element={<ProjectList />}/>
                <Route path='/about' element={<AboutPage />}/>
            </Routes>
        
        </>
    )
}

export default App
