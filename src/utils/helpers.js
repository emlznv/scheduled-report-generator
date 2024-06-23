import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { CHART_COLORS } from './constants.js'

export const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url);
    return dirname(__filename);
}


const getCommonChartConfig = (title) =>  {
    return {
        type: 'line',
        options: {
            plugins: {
                datalabels: {
                    align: 'top',
                },
                title: {
                    display: true,
                    text: title,
                },
                legend: {
                    display: true,
                    position: 'bottom',
                }
            },
        },
    }
}

const createDataSet = (label, data, backgroundColor, borderColor) => {
  return {
    label,
    data,
    backgroundColor,
    borderColor,
    borderWidth: 1,
    pointRadius: 0,
  }
}

export const getChartConfigurations = (data, labels, title) => {
    const commonConfig = getCommonChartConfig(title);

    const hourlyWaveHeightConfig = {
        ...commonConfig,
        data: {
            labels,
            datasets: [
                createDataSet(
                    `Wave Height (${data.hourly_units.wave_height})`,
                    data.hourly.wave_height,
                    CHART_COLORS.backgroundPrimary,
                    CHART_COLORS.borderPrimary,
                ),
                createDataSet(
                    `Swell Wave Height (${data.hourly_units.swell_wave_height})`,
                    data.hourly.swell_wave_height,
                    CHART_COLORS.backgroundSecondary,
                    CHART_COLORS.borderSecondary,
                ),
                createDataSet(
                    `Wind Wave Height (${data.hourly_units.wind_wave_height})`,
                    data.hourly.wind_wave_height,
                    CHART_COLORS.backgroundTertiary,
                    CHART_COLORS.borderTertiary,
                ),
            ]
        }
    }

    const hourlyWaveDirectionConfig = {
        ...commonConfig,
        data: {
            labels,
            datasets: [
                createDataSet(
                    `Wave Direction (${data.hourly_units.wave_direction})`,
                    data.hourly.wave_direction,
                    CHART_COLORS.backgroundPrimary,
                    CHART_COLORS.borderPrimary,
                ),
                createDataSet(
                    `Swell Wave Direction (${data.hourly_units.swell_wave_direction})`,
                    data.hourly.swell_wave_direction,
                    CHART_COLORS.backgroundSecondary,
                    CHART_COLORS.borderSecondary,
                ),
                createDataSet(
                    `Wind Wave Direction (${data.hourly_units.wind_wave_direction})`,
                    data.hourly.wind_wave_direction,
                    CHART_COLORS.backgroundTertiary,
                    CHART_COLORS.borderTertiary,
                ),
            ]
        }
    }

    const hourlyWavePeriodConfig = {
        ...commonConfig,
        data: {
            labels,
            datasets: [
                createDataSet(
                    `Wave Period (${data.hourly_units.wave_period})`,
                    data.hourly.wave_period,
                    CHART_COLORS.backgroundPrimary,
                    CHART_COLORS.borderPrimary,
                ),
                createDataSet(
                    `Swell Wave Period (${data.hourly_units.swell_wave_period})`,
                    data.hourly.swell_wave_period,
                    CHART_COLORS.backgroundSecondary,
                    CHART_COLORS.borderSecondary,
                ),
                createDataSet(
                    `Wind Wave Period (${data.hourly_units.wind_wave_period})`,
                    data.hourly.wind_wave_period,
                    CHART_COLORS.backgroundTertiary,
                    CHART_COLORS.borderTertiary,
                ),
            ]
        }
    }

    return { hourlyWaveHeightConfig, hourlyWaveDirectionConfig, hourlyWavePeriodConfig }
}