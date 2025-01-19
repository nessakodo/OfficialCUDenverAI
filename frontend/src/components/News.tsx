import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setNews, setLoading, setError } from "../actions/NewsActions";
import './News.css';
import FadeInComponent from '../motion/Fading';
import { motion } from "framer-motion";




function News() {
    ///////////////////////////
    //States
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

    const titleVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
    };

    
    const fadeInVariants = {
      hidden: { opacity: 0, y: 50 }, 
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const rows = [];
  for (let i = 0; i < news.length; i += 5) {
      rows.push(news.slice(i, i + 5));
  }

  return (
    <div className="news-container">
        {/* Animated Title */}
        <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}
            className="news-title"
        >
            Latest News
        </motion.h1>

        {loading ? (
            <p>Loading news...</p>
        ) : (
            <div>
                {rows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className="NewsGrid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                    >
                        {row.map((article, index) => (
                            <a
                                key={index}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="NewsCard"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="NewsImage"
                                />
                                <div className="NewsDetails">
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                ))}
            </div>
        )}
    </div>
);
}

export default News;