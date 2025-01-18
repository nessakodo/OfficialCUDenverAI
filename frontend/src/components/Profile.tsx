import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { CgProfile } from "react-icons/cg";

function Profile() {
    ///////////////////////////
    // States
    ///////////////////////////

    /**
     * gets the `profile` from the Redux state
     *
     * @typedef {Array | null} profile - profile information (fname, lname, email, bio, join_date, profile_picture and role)
     */
    const profile = useSelector((state) => state.user.profile);
    /**
     * gets the `projects` that user is involved with from the Redux state
     *
     * @typedef {Array | null} projects - The array of projects that user is involved with
     */
    const projects = useSelector((state) => state.user.projects); 
    

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
            <section>
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
            </section>

            
            {/* Projects Section */}
            <section>
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
            </section>

        </div>
    );
}



export default Profile;