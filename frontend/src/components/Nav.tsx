import React, { useState, useEffect } from 'react';
import './Nav.css'; 
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

/*Image imports*/
import icon from './images/club-rxCX8m8Y.png';
import defaultProfilePic from './images/Default_pfp.jpg'; 

// UI Imports
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
    ArchiveBoxXMarkIcon,
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
  } from '@heroicons/react/16/solid'
  

const Nav = () => {
    ///////////////////////////
    //States
    ///////////////////////////

    const [profilePicture, setProfilePicture] = useState(defaultProfilePic);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    ///////////////////////////
    //Functions
    ///////////////////////////

    const isLoggedIn = Cookies.get("username");


    const SignOut = async () => {
        try {
            const response = await axios.post('http://localhost:8080/sign-out', {}, {
                withCredentials: true, // Ensures cookies are sent
            });
            if (response.status === 200) {
                Cookies.remove("username"); // Clear cookies
                setIsAuthenticated(false); // Update state
                navigate('/home'); // Redirect to home page
            }
        } catch (error) {
            console.error("Error signing out:", error);
            alert("Failed to sign out. Please try again.");
        }
    };

    ///////////////////////////
    //TSX Rendering
    ///////////////////////////
    return (
        <div className="parent">
            <nav>
                {/*AI Club navigation bar logo*/}

                <img
                    src={icon} 
                    alt="AI Club Icon"
                    style={{ width: '50px', height: '50px' }} 
                />

                {/*AI Club navigation bar buttons*/}

                <div className="Nav-Links">
                    <button onClick={() => navigate('/home')}>Home</button>
                    <button onClick={() => navigate('/projects')}>Our Work</button>
                    <button onClick={() => navigate('/events')}>Events</button>
                    <button onClick={() => navigate('/blog')}>Resources</button>
                    <button onClick={() => navigate('/about-us')}>About Us</button>
                    <button onClick={() => navigate('/news')}>News</button>
                    
                    <div className="Join-Us">
                        {isLoggedIn ? (
                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                               
                                <Menu> 
                                {/* Profile Image */}
                                <MenuButton >
                                <img
                                    src={profilePicture}
                                    alt="Profile"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        border: '2px solid #ddd',
                                    }}
                                />
                                </MenuButton>
                                    <MenuItems anchor="bottom">
                                    <MenuItem>
                                    <button className="block w-full text-left data-[focus]:bg-blue-100" onClick={() => navigate('/profile')} >
                                        My Profile
                                    </button>
                                    </MenuItem>
                                    <MenuItem>
                                    <button className="block data-[focus]:bg-blue-100" onClick={() => navigate('/events')} >
                                        My events
                                        </button>
                                    </MenuItem>
                                    <MenuItem>
                                    <button className="block data-[focus]:bg-blue-100" onClick={SignOut} >
                                        Sign Out
                                        </button>
                                    </MenuItem>
                                </MenuItems>

                                </Menu>
                            </div>
                        ) : (
                            <button onClick={() => navigate('/signup')}>Join Us</button>
                        )}
                    </div>
                </div>
            </nav>

            

            {/*The separation line*/}

            <div className="hring">
                <hr />
            </div>
        </div>
    );
};

export default Nav;
