/**
 * This script allows us to store research retrieved from the API SEMANTIC SCHOLAR API into our SQL database for easy retrieval and avoiding API Limits
 */

const { connectToDB , connection } = require('./DatabaseConnection.ts');
const axios = require('axios');
require('dotenv').config();
const mysql = require('mysql2/promise');


// Function to fetch and store papers
async function fetchAndStorePapers(category) {
    try {
        let connection = await connectToDB(process.env.DB_USERNAME, process.env.DB_PASSWORD)

        // Semantic Scholar API URL
        const apiUrl = 'https://api.semanticscholar.org/graph/v1/paper/search';
    
        // Query parameters for the API
        const queryParams = {
            query: category,
            fields: 'url,title,authors,abstract,year',
            openAccessPdf: 1
        };
    
        console.log(`Fetching papers for category: ${category}`);
    
        // Make the GET request to Semantic Scholar API
        const response = await axios.get(apiUrl, { params: queryParams });
        
        // Extract the data and insert it into the database
        const papers = response.data.data;
        for (const paper of papers) {
            console.log(paper)
            const paperid = Number(paper.paperId);
            const title = paper.title || 'Unknown Title';
            const authors = (paper.authors || []).map(author => author.name).join(', ') || 'Unknown Authors';
            const abstract = paper.abstract || 'No Abstract';
            const year = paper.year || null;
            const url = paper.url || 'No URL';
            
            // Insert into the database
            await connection.execute(
            'INSERT INTO research_papers (paper_id, title, authors, abstract, year, url, category) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [paperid, title, authors, abstract, year, url, category]
            );
        }
    
        // Close the database connection
        await connection.end();
    
        console.log('Papers fetched and stored successfully!');
        } catch (error) {
        console.error('Error fetching data or inserting into the database:', error);
        }
    }

// Change to the categories you want to store
const categories = [ "Theoretical-AI"]
  
for (const cat of categories){
    // Call the function
    fetchAndStorePapers(cat);
};