const { google } = require('googleapis');
const path = require('path');

// OfficialCUDenverAI Club google calendar authentication
const authenticateServiceAccount = () => {
  const SERVICE_ACCOUNT_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(__dirname, 'cudenveraicalendar-23d94fc6babc.json');
  
  const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_FILE,
      scopes: SCOPES,
    });

    return auth;
  } catch (error) {
    console.error('Error authenticating Google API:', error);
    throw error;  
  }
};

module.exports = authenticateServiceAccount;