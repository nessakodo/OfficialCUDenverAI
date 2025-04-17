const xlsx = require('xlsx');
const { connectToDB } = require('./DatabaseConnection.ts');
require('dotenv').config();

// Read Excel
const workbook = xlsx.readFile('./AurariaHackTeams.xlsx'); 
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet); // Convert sheet to JSON

// Function to create teams and update team ids for members
async function createTeamsAndUpdateIds() {
  try {
    // Establish database connection
    const connection = await connectToDB(process.env.DB_USERNAME, process.env.DB_PASSWORD, 'hackathon');

    // Group members by team name
    const teamsDict = {};

    data.forEach(row => {
      const teamName = row['Team Name:']; // Assuming 'Team Name:' is the header in the Excel
      const email = row['University Email:']; // Assuming 'University Email:' is the header in the Excel

      if (teamName && email) {
        if (!teamsDict[teamName]) {
          teamsDict[teamName] = [];
        }
        teamsDict[teamName].push(email);
      }
    });

    // Step 1: Insert teams into HACKATHON_TEAMS table
    for (const teamName of Object.keys(teamsDict)) {
      console.log(`Inserting team: "${teamName}"`);

      // Insert the team into the HACKATHON_TEAMS table
      const [teamResult] = await connection.query(
        'INSERT INTO HACKATHON_TEAMS (team_name, created_at, updated_at) VALUES (?, NOW(), NOW())',
        [teamName]
      );

      const teamId = teamResult.insertId;
      console.log(`Team "${teamName}" created with team_id: ${teamId}`);

      // Step 2: Update the team_id for each member
      const members = teamsDict[teamName];
      for (const email of members) {
        console.log(`Updating team_id for member: ${email}`);
        
        // Update the team_id for each member
        const [updateResult] = await connection.query(
          'UPDATE TEAM_MEMBERS SET team_id = ? WHERE user_email = ?',
          [teamId, email]
        );

        // Log the update operation result
        if (updateResult.affectedRows > 0) {
          console.log(`Successfully updated team_id for member: ${email}`);
        } else {
          console.log(`No update found for member: ${email}`);
        }
      }
    }

    console.log('All teams have been successfully created and members updated.');
  } catch (err) {
    console.error('Error occurred:', err);
  }
}

// Run the function to create teams and update team ids
createTeamsAndUpdateIds();