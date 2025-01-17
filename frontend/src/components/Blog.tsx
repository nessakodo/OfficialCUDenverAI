import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Blog.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { CgProfile } from "react-icons/cg";

function Blog() {
    ///////////////////////////
    //States
    ///////////////////////////
    const [selectedCategory, setSelectedCategory] = useState("");
    const [researchPapers, setResearchPapers] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

      
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
      "Theoritical-AI",
      "Human-centered-AI" ];
    ///////////////////////////
    //Functions
    ///////////////////////////
    
    const handleCategoryClick = async (category) => {
        // Randomly get 3 research papers and set them as the state
        setSelectedCategory(category);
        const papers = await fetchResearchPapers(category);
        setResearchPapers(papers);
      };
    
 
    /* This function allows us to fetch research papers from our API */
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

      /* This function allows us to fetch blogs from our API */
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
    //TSX Rendering
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
        };
    



export default Blog;