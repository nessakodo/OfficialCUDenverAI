import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setNews, setLoading, setError } from "../actions/newsActions";
import './news.css';


function News() {
    ///////////////////////////
    //States
    ///////////////////////////
    const dispatch = useDispatch();
    const { news, loading, error } = useSelector((state: any) => state.news);
    
    ///////////////////////////
    //Functions
    ///////////////////////////
 
    /* This function allows us to fetch news from our backend API */
    useEffect(() => {
        // Check if news is already in Redux state
        if (news.length === 0) {
          dispatch(setLoading(true));
          fetch("http://localhost:8080/news")
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
    //TSX Rendering
    ///////////////////////////
    
    return (
        <div className="news-container" style={{ padding: "20px" }}>
        <h1>Latest News</h1>
        {loading ? (
          <p>Loading news...</p>
        ) : (
          <div className="news-cards" style={{ display: "flex", flexWrap: "wrap" }}>
            {news.map((article, index) => (
              <div
                key={index}
                className="card"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  margin: "10px",
                  width: "200px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-content" style={{ padding: "10px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{article.title}</h3>
                  <p style={{ fontSize: "14px", color: "#555" }}>{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      marginTop: "10px",
                      fontSize: "14px",
                      color: "#007BFF",
                      textDecoration: "none",
                    }}
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
          );
        };
    



export default News;