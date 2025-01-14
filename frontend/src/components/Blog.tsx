import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './blog.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { CgProfile } from "react-icons/cg";

function Blog() {
    ///////////////////////////
    //States
    ///////////////////////////
    const [selectedCategory, setSelectedCategory] = useState("");
    const [researchPapers, setResearchPapers] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const categories = [
      "CV",
      "NLP",
      "RL",
      "GenAI",
      "Robotics",
      "AI Ethics",
      "Multi-agent systems",
      "EdgeAI",
      "Healthcare and AI",
      "Theoretical AI",
      "Human-centered AI",
      "LLMs",
      "AI in Finance and Economics",
    ];
    ///////////////////////////
    //Functions
    ///////////////////////////
    const handleCategoryClick = async (category) => {
        // Randomly get 3 research papers and set them as the state
        setSelectedCategory(category);
        const papers = await fetchResearchPapers(category);
        setResearchPapers(papers);
      };
    
    const fetchResearchPapers = async (category) => {
        return [
          { id: 1, title: `Research Paper 1 in ${category}`, description: "Abstract here..." },
          { id: 2, title: `Research Paper 2 in ${category}`, description: "Abstract here..." },
        ];
    };

    ///////////////////////////
    //TSX Rendering
    ///////////////////////////
    
    return (
            <div>
        
              {/* Research Section */}
              <section>
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
                        <li key={paper.id}>
                          <strong>{paper.title}</strong>
                          <p>{paper.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No papers available for this category.</p>
                  )}
                </div>
              </section>
        
              {/* Community Blog Section */}
              <section>
                <h2>Community Blogs</h2>
                <div>
                  <p>Have a blog to share? Submit it here:</p>
                  <form>
                    <button type="submit">Submit Blog</button>
                  </form>
                </div>
                <div>
                  <h3>Community Blogs</h3>
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
              </section>
        
              {/* YouTube Section */}
              <section>
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
              </section>
            </div>
          );
        };
    



export default Blog;