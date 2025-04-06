const xlsx = require('xlsx');
const { connectToDB } = require('./DatabaseConnection.ts');
require('dotenv').config();

// Read Excel
const workbook = xlsx.readFile('./AurariaHack.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet); // [{ Full Name, Student Email Address }, ...]

async function HackathonExcelRetriever() {
  try {
    const connection = await connectToDB(process.env.DB_USERNAME, process.env.DB_PASSWORD, 'hackathon');

    for (const row of data) {
      // Check if the required fields exist
      const full_name = row['Full Name']?.trim();
      const student_email = row['Student Email Address']?.trim();
      const team_id = 0;

      // If any of the required fields is missing or empty, skip the row
      if (!full_name || !student_email) {
        console.warn(`Row is missing data:`, row);
        continue;
      }

       // Check if full_name already exists in TEAM_MEMBERS table
       const checkQuery = `
       SELECT * FROM TEAM_MEMBERS WHERE user_name = ?
        `;
        const [existingMember] = await connection.execute(checkQuery, [full_name]);
    
        if (existingMember.length > 0) {
            console.log(`Member with name ${full_name} already exists in the database.`);
            continue; // Skip inserting if the member already exists
       }

      // SQL query to insert data
      const query = `
        INSERT INTO TEAM_MEMBERS (team_id, user_name, user_email)
        VALUES (?, ?, ?)
      `;

      try {
        await connection.execute(query, [team_id, full_name, student_email]);
        console.log(`Inserted: ${full_name} (${student_email})`);
      } catch (insertErr) {
        console.error('Insert Error:', insertErr);
      }
    }

    await connection.end();
    console.log('Data insertion complete.');

  } catch (err) {
    console.error('Error in connection or file reading:', err);
  }
}

HackathonExcelRetriever();