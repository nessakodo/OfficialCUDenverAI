import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { CgProfile } from "react-icons/cg";

function Profile() {
    ///////////////////////////
    // States
    ///////////////////////////
    const profile = useSelector((state) => state.user.profile);
    const projects = useSelector((state) => state.user.projects); 
    const dispatch = useDispatch();

    ///////////////////////////
    // Functions
    ///////////////////////////
    const handleEditProfile = () => {
        console.log("Edit profile clicked!"); 
    };

    ///////////////////////////
    // TSX Rendering
    ///////////////////////////
    return (
        <div className="ProjectsPage">
            {/* Profile Section */}
            <div className="profile-section">
                <div className="avatar">
                    <CgProfile size={80} />
                </div>
                <div className="profile-details">
                    <h2>{profile?.name || "John Doe"}</h2>
                    <p>{profile?.email || "johndoe@example.com"}</p>
                    <button onClick={handleEditProfile}>Edit Profile</button>
                </div>
            </div>

            {/* Projects Section */}
            <div className="projects-section">
                <h3>Your Projects</h3>
                <ul>
                    {projects?.length > 0 ? (
                        projects.map((project, index) => (
                            <li key={index}>
                                <Link to={`/project/${project.id}`}>{project.name}</Link>
                            </li>
                        ))
                    ) : (
                        <p>No projects found. <Link to="/create-project">Create one?</Link></p>
                    )}
                </ul>
            </div>
        </div>
    );
}



export default Profile;