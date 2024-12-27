const mysql = require('mysql2/promise');

// This code will be used to establish a connection to the database 

let connection;

async function connectToDB(username, password) {
  try {
    // Initialize the connection
    connection = await mysql.createConnection({
      host: '129.153.84.107',
      user: username,
      password: password,
      database: 'official_ai_website',
    });

    console.log('Successfully connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

module.exports = { connectToDB, connection };
