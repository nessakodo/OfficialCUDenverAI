const User = require('./users');
const Event = require('./events');
const EventRegistration = require('./event_registration');
const Resource = require('./research_retrieval');
const Blog = require('./blogs');
const ActivityLog = require('./activity_log');

const app = require('express')();
const PORT = 8080;

// Table relationships
EventRegistration.associate({ User, Event });
Resource.associate({ User });
ActivityLog.associate({ User });


/////////////////////////
// GET ROUTES
//////////////////////////
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/projects', (req, res) => {
  res.send('This is the Projects Page');
});

app.get('/blog', (req, res) => {
  res.send('This is the Blog Page');
});

app.get('/calendar', (req, res) => {
    res.send('This is the Calendar Page');
  });

app.get('/about-us', (req, res) => {
    res.send('This is the About Us Page');
});

//////////////////////////
// POST ROUTES
//////////////////////////

// Adding blogs 
app.post('/blog', (req, res) => {
  });

// Adding events to calendar
app.post('/calendar', (req, res) => {
  });

// Adding projects 
app.post('/projects', (req, res) => {
});
  
//////////////////////////
// Signing in / Signing up
//////////////////////////



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});