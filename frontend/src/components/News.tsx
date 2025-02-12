/*Functionality imports*/

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setNews, setLoading, setError } from "../actions/NewsActions";
import './News.css';

/* UI Imports */

import FadeInComponent from '../motion/Fading';
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";



function News() {
    const dispatch = useDispatch();
    const { news, loading, error } = useSelector((state) => state.news);
  
    useEffect(() => {
      if (news.length === 0) {
        dispatch(setLoading(true));
        fetch("https://129.153.84.107:8080/news")
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
          <div className="loading-container">
            <ClipLoader color="#3498db" size={50} loading={loading} />
          </div>
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