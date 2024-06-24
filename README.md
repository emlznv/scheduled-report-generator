## Overview 
The purpose of this project is to:
  1. Fetch data from an external API at regular intervals
  2. Process the fetched data into a readable report format
  3. Send the generated report via email to specified recipients using an email service
  4. Use a cron job to trigger the script at scheduled times

## Run Locally

1. Clone the project

```bash
  git clone https://github.com/emlznv/scheduled-report-generator.git
```

2. Go to the project directory

```bash
  cd scheduled-report-generator
```

3. Install dependencies

```bash
  npm install
```
4. Copy the `.env.example` file content into a new `.env` file 

5. To allow Gmail emails to be sent using node, you will need to generate a password through your Google account by visiting this [link](https://myaccount.google.com/apppasswords)

6. Copy and paste the generated password to `EMAIL_PASSWORD` in the `.env` file

7. You can set the cron in `index.js` to run every few minutes (ex: '*/3 * * * *') to test the scheduled emails

8. Run the report generation

```bash
  npm start
```
## Email Preview

![chartprevie2](https://github.com/emlznv/scheduled-report-generator/assets/63013697/20211fdc-0640-4c93-bad5-37e50d5c08a4)

