The purpose of this project is to:
    1. Fetch data from an external API at regular intervals
    2. Process the fetched data into a readable report format
    3. Send the generated report via email to specified recipients using an email service
    4. Use a cron job to to trigger the script at scheduled times

Steps to run and test locally:
    1. Copy the .env.example file content into a new .env file
    2. Add a user email and recipient email
    3. To allow Gmail emails to be sent using node, you will need to generate a password through your Google account by visiting this link: https://myaccount.google.com/apppasswords
    4. Copy and paste the generated password to EMAIL_PASSWORD in the .env file
    5. You can set the cron in index.js to run every few minutes (ex: '*/3 * * * *') to test the scheduled emails
    6. Run npm start
