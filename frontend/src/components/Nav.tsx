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
    const [bar, setBarClass] = useState("bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const navigate = useNavigate();

    ///////////////////////////
    //Functions
    ///////////////////////////

    const isLoggedIn = Cookies.get("username");

    const updateMenu = () => {
        if(!isMenuClicked) {
            setMenuClass("menu visible")
            setBarClass("bar clicked")
        }
        else {
            setMenuClass("menu hidden")
            setBarClass("bar unclicked")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const SignOut = async () => {
        try {
            const response = await axios.post('http://129.153.84.107:8080/sign-out', {}, {
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
                    alt="AI Club Icon"                />

                {/*AI Club navigation bar buttons*/}

                <div className="Nav-Links">
                    <button onClick={() => navigate('/home')}>Home</button>
                    <button onClick={() => navigate('/projects')}>Our Work</button>
                    <button onClick={() => navigate('/events')}>Events</button>
                    <button onClick={() => navigate('/blog')}>Resources</button>
                    <button onClick={() => navigate('/news')}>News</button>
                    <button onClick={() => navigate('/about-us')}>About Us</button>

                    <div className="Join-Us">
                        {isLoggedIn ? (
                            <div >
                               
                                <Menu> 
                                    {/* Profile Image */}
                                    <MenuButton >
                                    <img
                                        src={profilePicture}
                                        alt="Profile"
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
                            <button onClick={() => {    
                                navigate('/home', { state: { scrollTo: 'UpcomingEventsTitle' } }); // Replace with registration section
                            }}>Join Us</button>
                        )}
                    </div>
                </div>

                <div className="Hamburger-menu">
                    <div className="burger-menu" onClick={updateMenu}>
                            <div className={bar} onClick={updateMenu}></div>
                            <div className={bar} onClick={updateMenu}></div>
                            <div className={bar} onClick={updateMenu}></div>
                    </div>
                </div>
            </nav>

            <div className={menu_class}>
                <button onClick={() => { updateMenu(); navigate('/home'); }}>Home</button>
                <button onClick={() => { updateMenu(); navigate('/projects'); }}>Our Work</button>
                <button onClick={() => { updateMenu(); navigate('/events'); }}>Events</button>
                <button onClick={() => { updateMenu(); navigate('/blog'); }}>Resources</button>
                <button onClick={() => { updateMenu(); navigate('/news'); }}>News</button>
                <button onClick={() => { updateMenu(); navigate('/about-us'); }}>About Us</button>
                {isLoggedIn ? (
                    <Menu>
                        <MenuButton>
                            <img src={profilePicture} alt="Profile" />
                        </MenuButton>
                        <MenuItems anchor="bottom">
                            <MenuItem>
                                <button onClick={() => { updateMenu(); navigate('/profile'); }}>My Profile</button>
                            </MenuItem>
                            <MenuItem>
                                <button onClick={() => { updateMenu(); navigate('/events'); }}>My Events</button>
                            </MenuItem>
                            <MenuItem>
                                <button onClick={() => { updateMenu(); SignOut(); }}>Sign Out</button>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                ) : (
                    <button onClick={() => { updateMenu(); navigate('/home', { state: { scrollTo: 'UpcomingEventsTitle' } }); }}>
                        Join Us
                    </button>
                )}
            </div>
                

            {/*The separation line*/}

            <div className="hring">
                <hr />
            </div>
        </div>
    );
};

export default Nav;
