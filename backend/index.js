/*
const User = require('./users');
const Event = require('./events');
const EventRegistration = require('./event_registration');
const Resource = require('./research_retrieval');
const Blog = require('./blogs');
const ActivityLog = require('./activity_log');
*/
const Calendar = require('./calendar_auth')
const { google } = require('googleapis');
require('dotenv').config();
const axios = require('axios');
const app = require('express')();
const PORT = 8080;



// Table relationships
/*
EventRegistration.associate({ User, Event });
Resource.associate({ User });
ActivityLog.associate({ User });
*/

// Setting up hidden keys
const CALENDAR_ID = process.env.CALENDAR_ID;


/////////////////////////
// HOME 
//////////////////////////
app.get('/', (req, res) => {
  res.send('Home page');
});


/////////////////////////
// PROJECTS
//////////////////////////

app.get('/projects', (req, res) => {
  res.send('This is the Projects Page');
});

/////////////////////////
// ABOUT US
//////////////////////////

app.get('/about-us', (req, res) => {
    res.send('This is the About Us Page');
});

//////////////////////////
// BLOG
//////////////////////////

// Retreiving papers from Semantic Scholar API
app.get('/search-papers/:category', async (req, res) => {
  try {

      // Semantic Scholar API URL
      const apiUrl = 'https://api.semanticscholar.org/graph/v1/paper/search';

      // we'll have different categories for searching
      const category = req.params.category;


      // Query parameters for the API
      const queryParams = {
          query: category,
          fields: 'url,title,authors,abstract,year',
          openAccessPdf: 1
      };

      // Make the GET request to Semantic Scholar API
      const response = await axios.get(apiUrl, { params: queryParams });
      

      // Send the API response back to the client
      res.status(200).json({
          success: true,
          data: response.data
      });
  } catch (error) {
      console.error('Error fetching data from Semantic Scholar API:', error);

      // Handle error
      res.status(500).json({
          success: false,
          message: 'An error occurred while fetching data.',
          error: error.message
      });
  }
});

// Displaying blogs
app.get('/blog', (req, res) => {
  res.send('Blog page')
  });

///////////////////
// CALENDAR
///////////////////

// Route to fetch calendar events
app.get('/events', async (req, res) => {
  try {
    const auth = Calendar();
    const calendar = google.calendar({ version: 'v3', auth });

    // Retrieve events from the calendar
    const response = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: new Date().toISOString(), // Get events starting now
      maxResults: 10,                   // Limit number of events
      singleEvents: true,               // Expand recurring events
      orderBy: 'startTime',             // Sort by start time
    });

    const events = response.data.items;

    if (!events || events.length === 0) {
      return res.status(200).send('No upcoming events found.');
    }

    // Format and return events
    const formattedEvents = events.map((event) => {
      const start = event.start.dateTime || event.start.date; // Handle all-day events
      return {
        start,
        summary: event.summary,
        description: event.description || 'No description',
        location: event.location || 'No location',
      };
    });

    res.status(200).json(formattedEvents);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    res.status(500).send('Failed to fetch calendar events.');
  }
});

  
//////////////////////////
// Signing in / Signing up
//////////////////////////



app.listen(PORT, async () => {
  try {
    // testing database connection

    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }

  console.log(`Server is running on http://localhost:${PORT}`);
});