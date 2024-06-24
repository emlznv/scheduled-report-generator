import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
import fs from 'fs';
import path from 'path';
import {
  getDirname,
  getChartConfigurations,
  getFormattedTimestamps,
  getFormattedCoordinates,
  getFormattedCurrentDate
} from '../utils/helpers.js'
import { CHART_HEIGHT, CHART_WIDTH } from '../utils/constants.js';

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: CHART_WIDTH, height: CHART_HEIGHT });

export async function generateChart(data) {
  const timestampLabels = getFormattedTimestamps([...data.hourly.time]);
  const currentDate = new Date(data.hourly.time[0]);
  const formattedCurrentDate = getFormattedCurrentDate(currentDate);
  const { formattedLongitude, formattedLatitude} = getFormattedCoordinates();

  const chartTitle = `${formattedCurrentDate} (${data.timezone}) | Longitude: ${formattedLongitude}, Latitude: ${formattedLatitude}`;

  const { hourlyWaveHeightConfig, hourlyWaveDirectionConfig, hourlyWavePeriodConfig } = getChartConfigurations(data, timestampLabels, chartTitle);
  const hourlyWaveHeightImageBuffer = await chartJSNodeCanvas.renderToBuffer(hourlyWaveHeightConfig);
  const hourlyWaveDirectionImageBuffer = await chartJSNodeCanvas.renderToBuffer(hourlyWaveDirectionConfig);
  const hourlyWavePeriodImageBuffer = await chartJSNodeCanvas.renderToBuffer(hourlyWavePeriodConfig);

  saveChartAsImage(hourlyWaveHeightImageBuffer, 'waveHeightChart');
  saveChartAsImage(hourlyWaveDirectionImageBuffer, 'waveDirectionChart');
  saveChartAsImage(hourlyWavePeriodImageBuffer, 'wavePeriodChart');
}

async function saveChartAsImage(buffer, fileName) {
  try {
    const outputPath = path.join(getDirname(), `../assets/${fileName}.png`);

    fs.writeFile(outputPath, buffer, 'base64', err => {
      if (err) {
        console.error(`Error saving chart: ${err}`);
      } else {
        console.log(`Chart saved successfully at: ${outputPath}`);
      }
    });

  } catch (err) {
    console.error('Error saving chart as image:', err);
    throw err;
  }
}