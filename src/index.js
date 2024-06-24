import { fetchWeatherData } from "../src/services/api.js";
import { sendEmailWithChart } from "./services/email.js";
import { generateChart } from "./services/chartGenerator.js";
import { CronJob } from 'cron';
import dotenv from 'dotenv';

dotenv.config();

/** Runs every day at 8 AM */
new CronJob(
  '0 8 * * *',
  async function () {
    try {
      const forecastData = await fetchWeatherData();
      await generateChart(forecastData);
      await sendEmailWithChart(forecastData);
    } catch (error) {
      console.error('Error generating report:', error);
    }
  },
  null,
  true,
  process.env.TIME_ZONE
);
