import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { useSelector, useDispatch } from 'react-redux';
import { CgProfile } from "react-icons/cg";

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Decoy Challenge",
            image: "https://via.placeholder.com/300x200", // Replace with actual image URL
            description: "Description of the Decoy Challenge project."
        },
        {
            id: 2,
            title: "Project #2",
            image: "https://via.placeholder.com/300x200", // Replace with actual image URL
            description: "Description for project #2."
        },
        {
            id: 3,
            title: "Project #3",
            image: "https://via.placeholder.com/300x200", // Replace with actual image URL
            description: "Description for project #3."
        }
    ];

    return (
        <div className="ProjectsPage">
            {/* Header Section */}
            <div className="ProjectsBanner">
                <img
                    src="https://via.placeholder.com/1920x400" // Replace with actual banner image URL
                    alt="Projects Banner"
                    className="BannerImage"
                />
                <div className="BannerText">
                    <h1>Projects</h1>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="ProjectGrid">
                {projects.map((project) => (
                    <div className="ProjectCard" key={project.id}>
                        <img src={project.image} alt={project.title} className="ProjectImage" />
                        <div className="ProjectDetails">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
