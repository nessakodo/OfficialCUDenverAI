/**
 * This will be the page for the hackathon with route /events/hackathon2025
 */

/*Functionality imports*/

import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { setBlogs, setError } from "../../actions/BlogsActions";
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Link, Element } from "react-scroll";
import './HackathonResources.css'



function HackathonResources() {
    ///////////////////////////
    // States
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const toggleDropdown = (name) => {
        setDropdownOpen(prev => (prev === name ? null : name));
      };
    ///////////////////////////


    ///////////////////////////
    // Functions
    ///////////////////////////



    ///////////////////////////
    // TSX Rendering
    ///////////////////////////


    return (       
    
    <div className="hackathon-resources">

    {/* <div className="hackathon-nav">
        <ul>
        <li><RouterLink to="/events/hackathon2025">Hackathon Info</RouterLink></li>
        <li><RouterLink to="/events/hackathon2025/prizes">Prizes</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/resources">Resources</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/faq">FAQ</RouterLink></li>
        <li><RouterLink to="/events/hackathon2025/rules">Rules</RouterLink></li>
        </ul>
      </div> */}
      
        {/* Datasets Section */}
        <Element name="datasets" className="section Datasets">
            <h2>🔍 Datasets Search</h2>
            <p>Here are some good places to find the dataset you need!</p>
            <ul>
                <li><a href="https://www.kaggle.com/datasets" target="_blank">Kaggle Datasets</a> - Wide variety of datasets.</li>
                <li><a href="https://data.gov/" target="_blank">Data.gov</a> - Government public datasets.</li>
                <li><a href="https://datasetsearch.research.google.com/" target="_blank">Google Dataset Search</a> - Dataset Search engline.</li>
                <li><a href="https://github.com/awesomedata/awesome-public-datasets" target="_blank">Awesome Public Datasets</a> - A curated list of free datasets.</li>
            </ul>

            <hr></hr>
            <br></br>

            {/* Datasets in specific field */}
            <h2>📂 Datasets for Specific Field</h2>
                <div className="dropdown-section">
                    <div className="dropdown-header" onClick={() => toggleDropdown('Climate/Weather')}>
                        {dropdownOpen === 'Climate/Weather' ? '▼ Climate/Weather' : '▶ Climate/Weather'}
                    </div>
                    {dropdownOpen === 'Climate/Weather' && (
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="https://climate.colostate.edu/data_access_new.html" target="_blank">Colorado Weather Data</a> - Detail Colorado Climate Data From CSU.</li>
                            <li><a href="https://www.ncei.noaa.gov/products/climate-data-records/variable-exploration" target="_blank">Climate Data Record </a> - Climate Data Record Variable Exploration From NOAA.</li>
                            <li><a href="https://openweathermap.org" target="_blank">OpenWeather</a> - Free API to get past and current weather data, also weather prediction </li>
                        </ul>
                </div>              
                    )}

                <div className="dropdown-header" onClick={() => toggleDropdown('Finance')}>
                    {dropdownOpen === 'Finance' ? '▼ Finance' : '▶ Finance'}
                </div>
                {dropdownOpen === 'Finance' && (
                <div className="dropdown-content">
                    <ul>
                        <li><a href="https://www.redfin.com/news/data-center/?utm_source=chatgpt.com" target="_blank">Redfin</a> - Datasets of Housing Prize History Fron Redfin</li>
                        <li><a href="https://www.zillow.com/research/data/?utm_source=chatgpt.com" target="_blank">Zillow Housing Data</a> - Datasets of Housing Prize History From Zillow</li>
                        <li><a href="https://www.nasdaq.com/market-activity/quotes/historical?utm_source=chatgpt.com" target="_blank">Nasdaq Stock Data</a> - Dataset of Stock Prices</li>

                    </ul>
                </div>
                )}
    
                
                <div className="dropdown-header" onClick={() => toggleDropdown('Transportation')}>
                    {dropdownOpen === 'Transportation' ? '▼ Transportation' : '▶ Transportation'}
                </div>
                {dropdownOpen === 'Transportation' && (
                <div className="dropdown-content">
                    <ul>
                        <li><a href="https://www.rtd-denver.com/open-records/open-spatial-information" target="_blank">RTD Data</a> - Datasets of RTD GIS(geographic information system) and arrival predictions and vehicle locations</li>
                        <li><a href="https://data.transportation.gov/?utm_source=chatgpt.com" target="_blank">Transportation.gov/</a> - Nationwide Transportation Data</li>
                        <li><a href="https://geodata.bts.gov" target="_blank">Bureau of Transportation Statistics</a> - National Geospatial Datasets</li>

                    </ul>
                </div>
                )}

                <div className="dropdown-header" onClick={() => toggleDropdown('Health Care')}>
                    {dropdownOpen === 'Health Care' ? '▼ Health Care' : '▶ Health Care'}
                </div>
                {dropdownOpen === 'Health Care' && (
                <div className="dropdown-content">
                    <ul>
                        <li><a href="https://health.google.com/covid-19/open-data/" target="_blank">COVID-19 Open Data</a> - COVID-19 Open Data Repository From Google</li>
                        <li><a href="https://open.cdc.gov/data.html?utm_source=chatgpt.com" target="_blank">Center of Disease Control/</a> - data sets from the CDC, such as statistics, surveys, archives and more</li>

                    </ul>
                </div>
                )}


            </div>
        </Element>
        
        {/* Data Science*/}
        <Element name="Basic of Data Dcience" className="section DataScience">
        <h2>🔍 Data Analytics</h2>
        <p>Here are some guides to use python as data analytics tool</p>
        <ul>
            <li><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DWUeBzT43JyY&ved=2ahUKEwipnMzXm8mMAxVTOjQIHbAnDp0QwqsBegQIDxAF&usg=AOvVaw0rv-dsIsHNjvK9PrHhg2vm" target="_blank">Awesome Tutorial For Anaconda and Jupyter Notebook</a> - To help set up python environment for data science</li>
            <li><a href="https://media.datacamp.com/legacy/image/upload/v1676302204/Marketing/Blog/Pandas_Cheat_Sheet.pdf" target="_blank">Pandas Cheatsheet</a> - Guide on Pandas library in Python for data cleaning</li>
            <li><a href="https://media.datacamp.com/legacy/image/upload/v1676302389/Marketing/Blog/Scikit-Learn_Cheat_Sheet.pdf" target="_blank">Scikit-Learn Cheatsheet</a> - Guide on Scikit-Learn library in Python for Machine-Learning</li>
            <li><a href="https://media.datacamp.com/legacy/image/upload/v1676302459/Marketing/Blog/Numpy_Cheat_Sheet.pdf" target="_blank">Numpy Cheatsheet</a> - Guide on Numpy library in Python for math</li>
        </ul>
        </Element>

        {/* AI Aid*/}
        <Element name="AI/LLM" className="section AI">
        <h2>🔍 AI/LLM Resource</h2>
        <ul>
            <li><a href="https://chatgpt.com" target="_blank">ChatGPT</a> - ChatGPT Plus is now free for college students through May, <a href="https://ollama.com" target="_blank">click here to claim</a> </li>
            <li><a href="https://ollama.com" target="_blank">Ollama</a> - A selfhost AI in your local device, check out <a href="https://cudenver-ai.tech/blog" target="_blank">our blog</a> for tutorial if need</li>
            <li><a href="https://huggingface.co" target="_blank">Hugging Face</a> - The open source AI community</li>
        </ul>


        </Element>
        

    </div>);
}

export default HackathonResources;
