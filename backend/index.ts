const Calendar = require('./CalendarAuth.ts')
const { google } = require('googleapis');
const mysql = require('mysql2/promise');
const { connectToDB , connection } = require('./DatabaseConnection.ts');
require('dotenv').config();
const generateUserId = require('./Utils.ts')
const axios = require('axios');
const app = require('express')()
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
app.use(bodyParser.json())
const PORT = 8080;
const cors = require("cors");
const allowedOrigins = ["http://localhost:3000"];
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');

// Session authentication setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,  
  cookie: {
    maxAge: 60000 * 60
  }

}))


app.use(
  cors({
      origin: function(origin, callback) {
          if (!origin) return callback(null, true);
          if (allowedOrigins.indexOf(origin) === -1) {
              var msg =
                  "The CORS policy for this site does not " +
                  "allow access from the specified Origin.";
              return callback(new Error(msg), false);
          }
          return callback(null, true);
      }
  })
); 


// Setting up hidden keys
const CALENDAR_ID = process.env.CALENDAR_ID;


/////////////////////////
// HOME 
//////////////////////////
app.get('/', async (req, res) => {
  console.log(req.session)
  console.log(req.session.id)
  req.session.visited = true;
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
// Displaying news
app.get('/news', async (req, res) => {
  try {
    let connection = await connectToDB(process.env.DB_USERNAME, process.env.DB_PASSWORD);

    const [rows] = await connection.execute(
      'SELECT * FROM NEWS'
    );
    console.log(rows)
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).send('Failed to news');
  }
  });


// Displaying blogs
app.get('/blogs', async (req, res) => {
  try {
    let connection = await connectToDB(process.env.DB_USERNAME, process.env.DB_PASSWORD);

    const [rows] = await connection.execute(
      'SELECT * FROM research_papers WHERE category = ?',
      [req.params.category]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching research papers:', error.message);
    res.status(500).send('Failed to fetch research papers');
  }
  });

app.get('/research/:category', async (req, res) => {
    try {
      let connection = await connectToDB(process.env.DB_USERNAME, process.env.DB_PASSWORD);
  
      const [rows] = await connection.execute(
        'SELECT * FROM research_papers WHERE category = ?',
        [req.params.category]
      );
  
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching research papers:', error.message);
      res.status(500).send('Failed to fetch research papers');
    }
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
app.post('/sign-up', async (req, res) => {
  let connection = await connectToDB(process.env.DB_USERNAME, process.env.DB_PASSWORD)

  const {fname, lname, email, password } = req.body

  try {

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    
    // Generate a unique user_id
    const userId = parseInt(uuidv4().replace(/-/g, '').slice(0, 6), 16);

    await connection.execute(
      'INSERT INTO USERS (user_id, email, fname, lname, password_hash, join_date, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [userId,email, fname, lname, hashedPassword, new Date(), 'member']
    );

    console.log(new Date())


    await connection.end();

    res.status(201).json({ message: 'User created successfully' }); } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error });
    }
});

// Sign-in Route
app.post('/sign-in', async (req, res) => {
  let connection = await connectToDB(process.env.DB_USERNAME, process.env.DB_PASSWORD)

  const { email, password } = req.body;

  try {
    const [rows] = await connection.execute(
      'SELECT user_id, password_hash FROM USERS WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const storedPasswordHash = rows[0].password_hash;

    const isPasswordValid = await bcrypt.compare(password, storedPasswordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }



    res.status(200).json({ message: 'Sign-in successful'});
  } catch (error) {
    res.status(500).json({ message: 'Error signing in', error: error.message });
  }
});

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