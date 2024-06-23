import { createTransport } from 'nodemailer';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const getChartOverview = (data, unit,) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const avg = (data.reduce((sum, val) => sum + val, 0) / data.length);

    return `
       <p>📉 Minimum: ${min.toFixed(1)} ${unit}</p>
       <p>📈 Maximum: ${max.toFixed(1)} ${unit}</p>
       <p>📊 Average: ${avg.toFixed(1)} ${unit}</p>
    `
}


export async function sendEmailWithChart(data) {
    const waveHeightOverview = getChartOverview(data.hourly.wave_height, data.hourly_units.wave_height);
    const waveDirectionOverview = getChartOverview(data.hourly.wave_direction, data.hourly_units.wave_direction);
    const wavePeriodOverview = getChartOverview(data.hourly.wave_period, data.hourly_units.wave_period);

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    });

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const waveHeightImagePath = path.join(__dirname, '../assets/waveHeightChart.png');
    const waveDirectionImagePath = path.join(__dirname, '../assets/waveDirectionChart.png');
    const wavePeriodImagePath = path.join(__dirname, '../assets/wavePeriodChart.png');

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `🏄 Surfs up! Today's forecast`,
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        html: `
            <h3>Wave height:</h3>
            ${waveHeightOverview}
            <img src="cid:waveHeightChart" alt="Wave Height Chart">
            <h3>Wave direction:</h3>
            ${waveDirectionOverview}
            <img src="cid:waveDirectionChart" alt="Wave Direction Chart">
            <h3>Wave period:</h3>
            ${wavePeriodOverview}
            <img src="cid:wavePeriodChart" alt="Wave Period Chart">
        `,
        attachments: [
            {
                filename: 'waveHeightChart.png',
                path: waveHeightImagePath,
                cid: 'waveHeightChart'
            },
            {
                filename: 'waveDirectionChart.png',
                path: waveDirectionImagePath,
                cid: 'waveDirectionChart'
            },
            {
                filename: 'wavePeriodChart.png',
                path: wavePeriodImagePath,
                cid: 'wavePeriodChart'
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
