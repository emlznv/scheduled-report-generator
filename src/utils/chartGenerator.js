import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { getHourlyWaveHeightConfig, getHourlyWaveDirectionConfig, getHourlyWavePeriodConfig } from './chartConfig.js'

const chartWidth = 800;
const chartHeight = 600;

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: chartWidth, height: chartHeight });

export async function generateChart(data) {
  const timestamps = data.hourly.time;

  const labels = timestamps.map(timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  });

  const currentDate = new Date(data.hourly.time[0]);

  const formattedCurrentDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
 
  const chartTitle = `Hourly forecast for ${formattedCurrentDate} (${data.timezone})`

  const hourlyWaveHeightImageBuffer = await chartJSNodeCanvas.renderToBuffer(getHourlyWaveHeightConfig(labels, data, chartTitle));
  const hourlyWaveDirectionImageBuffer = await chartJSNodeCanvas.renderToBuffer(getHourlyWaveDirectionConfig(labels, data, chartTitle));
  const hourlyWavePeriodImageBuffer = await chartJSNodeCanvas.renderToBuffer(getHourlyWavePeriodConfig(labels, data, chartTitle));

  saveChartAsImage(hourlyWaveHeightImageBuffer, 'waveHeightChart');
  saveChartAsImage(hourlyWaveDirectionImageBuffer, 'waveDirectionChart');
  saveChartAsImage(hourlyWavePeriodImageBuffer, 'wavePeriodChart');
}


// const createDataSet = (label, data, backgroundColor) => {
//   return {
//     label,
//     data,
//     backgroundColor,
//     borderWidth: 1,
//     pointRadius: 0,
//   }
// }

async function saveChartAsImage(buffer, fileName) {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const outputPath = path.join(__dirname, `../assets/${fileName}.png`);

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