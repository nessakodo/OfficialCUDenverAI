const mysql = require('mysql2/promise');

// Declare the connection variable globally within the module
let connection;

// Function to establish a connection to the database
async function connectToDB(username, password) {
  try {
    connection = await mysql.createConnection({
      host: '129.153.84.107',
      user: username,
      password: password,
      database: 'official_ai_website',
    });

    console.log('Successfully connected to the database');
    return connection; 
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

module.exports = { connectToDB};