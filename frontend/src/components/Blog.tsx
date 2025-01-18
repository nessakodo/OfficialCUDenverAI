/**
 * Blog component that displays research categories, research papers, community blogs, and educational videos.
 * Allows users to select a category, view related research papers, read blogs, and watch educational videos.
 */

/*Functionality imports*/

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
    ///////////////////////////
    // States
    ///////////////////////////
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
     * @typedef {Array<Object>} Blogs
     * @description List of community blogs fetched from the API.
     */
    const [blogs, setBlogs] = useState([]);

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
     * List of research categories available for selection.
     */
    const categories = [
        "Computer-Vision",
        "Natural-Language-Processing",
        "Reinforcement-learning",
        "GenAI",
        "Robotics",
        "AI-Ethics",
        "Multi-agent-systems",
        "EdgeAI",
        "Healthcare-and-AI",
        "Theoretical-AI",
        "Human-centered-AI",
    ];

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
            const response = await fetch(`http://localhost:8080/research/${category}`);
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
    const fetchBlogs = async () => {
        try {
            const response = await fetch(`http://localhost:8080/blogs`);
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

    ///////////////////////////
    // TSX Rendering
    ///////////////////////////

    return (
        <div>
            {/* Research Section */}
            <section>
                <div className="ResearchSection">
                    <h2>Research Categories</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                style={{
                                    padding: "10px",
                                    backgroundColor: selectedCategory === category ? "#007BFF" : "#f0f0f0",
                                    color: selectedCategory === category ? "#fff" : "#000",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div>
                        <h3>Research Papers for {selectedCategory || "Select a Category"}</h3>
                        {researchPapers.length > 0 ? (
                            <ul>
                                {researchPapers.map((paper) => (
                                    <li key={paper.paper_id}>
                                        <strong>{paper.title}</strong>
                                        <p>{paper.abstract}</p>
                                        <button 
                                            onClick={() => window.open(paper.url, '_blank')} 
                                            style={{ 
                                                backgroundColor: 'black', 
                                                color: 'white', 
                                                padding: '10px 15px', 
                                                border: 'none', 
                                                borderRadius: '5px', 
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s ease'
                                            }}
                                        >
                                            Read More
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No papers available for this category.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Community Blog Section */}
            <section>
                <div className="CommunitySection">
                    <h2>Community Blogs</h2>
                    <div className="CommunityBlogs">
                        {blogs.length > 0 ? (
                            <ul>
                                {blogs.map((blog, index) => (
                                    <li key={index}>
                                        <strong>{blog.title}</strong>
                                        <p>{blog.content}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No blogs submitted yet.</p>
                        )}
                    </div>
                    <div>
                        <p>Have a blog to share? Submit it here:</p>
                        <form>
                            <button type="submit">Submit Blog</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* YouTube Section */}
            <section>
                <div className="CommunitySection">
                    <h2>Educational Videos</h2>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/tF-SBS5PuQY"
                            title="YouTube video 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/v4H2fTgHGuc"
                            title="YouTube video 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blog;
