export function getImageForWeather(weatherData: string, basePath: string): string {
    if (weatherData.includes('snow')) {
        return `${basePath}/icons/13d.svg`;
    }
    if (weatherData.includes('Overcast')) {
        return `${basePath}/icons/02d.svg`;
    }
    if (weatherData.includes('Patchy rain')) {
        return `${basePath}/icons/10d.svg`;
    }
    if (weatherData.includes('Partly Cloudy')) {
        return `${basePath}/icons/04d.svg`;
    }
    if (weatherData.includes('Cloudy')) {
        return `${basePath}/icons/03d.svg`;
    }
    if (weatherData.includes('thunder')) {
        return `${basePath}/icons/011d.svg`;
    }
    if (weatherData.includes('rain')) {
        return `${basePath}/icons/09d.svg`;
    }
    if (weatherData.includes('Sunny')) {
        return `${basePath}/icons/01d.svg`;
    }
    return `${basePath}/icons/04d.svg`;
}