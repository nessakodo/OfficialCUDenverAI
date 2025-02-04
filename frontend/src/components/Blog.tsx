/**
 * Blog component that displays research categories, research papers, community blogs, and educational videos.
 * Allows users to select a category, view related research papers, read blogs, and watch educational videos.
 */

/*Functionality imports*/

import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { setBlogs, setError } from "../actions/BlogsActions";
import './Blog.css'

/* UI Imports */
import { motion } from "framer-motion";


function Blog() {
    ///////////////////////////
    // States
    ///////////////////////////

    /**
    * @description React hook for dispatching actions to update states
    */
    const dispatch = useDispatch();
    
    /**
     * @typedef {string} selectedCategory
     * @description Stores the currently selected research category.
     */
    const [selectedCategory, setSelectedCategory] = useState("");

    /**
     * @typedef {Array<Object>} ResearchPapers
     * @description List of research papers fetched from the API for the selected category.
     */
    const [researchPapers, setResearchPapers] = useState([]);

    /**
     * @typedef {Array<Object>} showResearchPapers
     * @description Thgis will toggle the showing of the section.
     */
    const [showResearchPapers, setShowResearchPapers] = useState(false);  // Add state for toggling display


    /**
     * @typedef {Array<Object>} blogs
     * @description List of community blogs fetched from the API.
     */
    const { blogs } = useSelector((state: any) => state.blogs);
    

    /**
     * @typedef {boolean} Loading
     * @description Indicates whether the data is currently loading.
     */
    const [loading, setLoading] = useState(true);

    /**
     * @typedef {string|null} Error
     * @description Stores any error message encountered during API calls.
     */
    const [error, setError] = useState(null);

    /**
     * @typedef {string|null} showPapers
     * @description State of whether to show research papers
     */
    const [showPapers, setShowPapers] = useState(true);

    /**
     * List of research categories available for selection.
     */
    const categories = [
        "Computer-Vision",
        "Natural-Language-Processing",
        "Reinforcement-learning",
        "GenAI",
        "Multi-agent-systems",
        "Robotics",
        "Theoretical-AI",
        "Human-centered-AI",
    ];

    /**
     * Options for the title transition
     */
    const titleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
      };

    ///////////////////////////
    // Functions
    ///////////////////////////

    /**
     * Handles the selection of a research category.
     * Fetches and sets research papers for the selected category.
     * 
     * @param {string} category - The selected category.
     */
    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        const papers = await fetchResearchPapers(category);
        setResearchPapers(papers);
    };

    /**
     * Fetches research papers from the backend API for a given category.
     * 
     * @param {string} category - The research category to fetch papers for.
     * @returns {Promise<Array<Object>>} - A promise resolving to a list of research papers.
     */
    const fetchResearchPapers = async (category) => {
        try {
            const response = await fetch(`http://129.153.84.107:8080/research/${category}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            setError(error.message);
            setLoading(false);
            return [];
        }
    };


    /**
    * Fetches community blogs from the backend API.
    * 
    * @returns {Promise<Array<Object>>} - A promise resolving to a list of blogs.
    */
    const fetchBlogs = () => {
        return (dispatch) => {
          console.log("test")
          fetch("http://localhost:8080/blogs")
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              dispatch(setBlogs(data));
            })
            .catch((error) => {
              console.log("error"); 
            })
        };
      };
      
    useEffect(() => {
        if (!blogs.length) {
          dispatch(fetchBlogs()); 
        }
      }, [dispatch, blogs.length]);

    

    ///////////////////////////
    // TSX Rendering
    ///////////////////////////

    return (
<div className="BlogPage">

                    {/* Educational Videos Section */}
                    <section className="VideosSection">
                            <motion.h1
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}
                                className="news-title"
                            >
                                Educational Videos
                            </motion.h1>
                    <div className="VideoContainer">
                    <iframe
                        width="5vw"
                        height="5vh"
                        src="https://www.youtube.com/embed/tF-SBS5PuQY"
                        title="The amazing, but unsettling future of technology..."
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="5vw"
                        height="5vh"
                        src="https://www.youtube.com/embed/v4H2fTgHGuc"
                        title="The 10 Most Cited AI Research Papers of 2024"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    </div>
                </section>

                 {/* Research Section */}
                <section className="ResearchSection">
                            <motion.h1
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}
                                className="news-title"
                            >
                                Research Papers
                            </motion.h1>
                            
                    <div className="CategoryButtons">
                        {categories.map((category) => (
                            <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`category-btn ${selectedCategory === category ? "selected" : ""}`}
                            >
                            {category}
                            </button>
                        ))}
                    </div>

                    <div className="CategoryButtonsDropDown">
                    <select 
                            onChange={(e) => handleCategoryClick(e.target.value)} 
                            value={selectedCategory} 
                            className="category-select"
                        >
                            {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                            ))}
                        </select>
                    </div>

                    <div className="ResearchPapersSection">
                    <h3>Research Papers for {selectedCategory || "Select a Category"}</h3>
    
                            {/* Toggle Button */}
                            <button 
                            onClick={() => setShowPapers(!showPapers)} 
                            className="category-btn "
                            >
                            {showPapers ? "Hide Research Papers" : "Show Research Papers"}
                            </button>

                            {/* Conditionally render research papers */}
                            {showPapers && researchPapers.length > 0 ? (
                            <ul>
                                {researchPapers
                                .sort(() => 0.5 - Math.random())
                                .slice(0, 3)
                                .map((paper) => (
                                    <li key={paper.paper_id} className="ResearchPaperItem">
                                    <strong>{paper.title}</strong>
                                    <p>{paper.abstract}</p>
                                    <button 
                                        onClick={() => window.open(paper.url, '_blank')} 
                                        className="read-more-btn"
                                    >
                                        Read More
                                    </button>
                                    </li>
                                ))}
                            </ul>
                            ) : showPapers ? (
                            <p>No papers available for this category.</p>
                            ) : null}

                    </div>
                </section>

                {/* Community Blog Section */}
                <section className="CommunitySection">
                    <h2>Community Blogs</h2>
                    <div className="CommunityBlogs">
                    {blogs.length > 0 ? (
                        <ul>
                        {blogs.map((blog, index) => (
                            <li key={index} className="CommunityBlogItem">
                            <strong>{blog.title}</strong>
                            <p>{blog.content}</p>
                            </li>
                        ))}
                        </ul>
                    ) : (
                        <p>No blogs submitted yet.</p>
                    )}
                    </div>
                    <div className="SubmitBlog">
                    <p>Have a blog to share? Submit it here:</p>
                    <form>
                        <button type="submit" className="submit-blog-btn">Submit Blog</button>
                    </form>
                    </div>
                </section>


                </div>
    );
}

export default Blog;
