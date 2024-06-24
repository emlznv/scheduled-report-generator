import axios from 'axios';

const hourlyParams = [
    'wave_height',
    'wind_wave_height',
    'swell_wave_height',
    'wave_direction',
    'wind_wave_direction',
    'swell_wave_direction',
    'wave_period',
    'wind_wave_period',
    'swell_wave_period',
    'ocean_current_direction',
    'ocean_current_velocity',
]

const forecastDaysParam = 1;

export const fetchWeatherData = async () => {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/marine?latitude=${process.env.LATITUDE}&longitude=${process.env.LONGITUDE}&timezone=${process.env.TIME_ZONE}&forecast_days=${forecastDaysParam}&hourly=${hourlyParams.join(',')}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}
