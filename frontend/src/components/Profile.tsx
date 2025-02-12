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
    * @description React hook for dispatching actions to update states
    */
    const dispatch = useDispatch();

    /**
     * gets the `news`, `loading`, and `error` from the Redux state
     *
     * @typedef {Array | null} news - The array of news articles fetched from the store, or null if not yet loaded
     * @typedef {boolean} loading - Indicates whether the news data is currently being loaded
     * @typedef {string | null} error - Error message if there was an issue fetching the news, or null if no error
     */
    const { news, loading, error } = useSelector((state: any) => state.news);
    
    ///////////////////////////
    //Functions
    ///////////////////////////
 
    /**
     * Fetches news from our backend API
     * 
     * @returns {Promise<Array<Object>>} - A promise resolving to a list of news
     */    
    useEffect(() => {
        // Check if news is already in Redux state
        if (news.length === 0) {
          dispatch(setLoading(true));
          fetch("https://cudenver-ai.tech/api/news")
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              dispatch(setNews(data));
            })
            .catch((error) => {
              dispatch(setError(error.message));
            });
        }
      }, [dispatch, news.length]);

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