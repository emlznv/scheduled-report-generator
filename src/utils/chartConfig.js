export const getHourlyWaveHeightConfig = (labels, data, title) => {
    return {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: `Wave Height (${data.hourly_units.wave_height})`,
                    data: data.hourly.wave_height,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
                {
                    label: `Swell Wave Height (${data.hourly_units.swell_wave_height})`,
                    data: data.hourly.swell_wave_height,
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
                {
                    label: `Wind Wave Height (${data.hourly_units.wind_wave_height})`,
                    data: data.hourly.wind_wave_height,
                    backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
            ],
        },
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
    };
}


export const getHourlyWaveDirectionConfig = (labels, data, title) => {
    return {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: `Wave Direction (${data.hourly_units.wave_direction})`,
                    data: data.hourly.wave_direction,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
                {
                    label: `Swell Wave Direction (${data.hourly_units.swell_wave_direction})`,
                    data: data.hourly.swell_wave_direction,
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
                {
                    label: `Wind Wave Direction (${data.hourly_units.wind_wave_direction})`,
                    data: data.hourly.wind_wave_direction,
                    backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
            ],
        },
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
    };
}


export const getHourlyWavePeriodConfig = (labels, data, title) => {
    return {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: `Wave Period (${data.hourly_units.wave_period})`,
                    data: data.hourly.wave_period,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
                {
                    label: `Swell Wave Period (${data.hourly_units.swell_wave_period})`,
                    data: data.hourly.swell_wave_period,
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
                {
                    label: `Wind Wave Period (${data.hourly_units.wind_wave_period})`,
                    data: data.hourly.wind_wave_period,
                    backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                },
            ],
        },
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
    };
}
