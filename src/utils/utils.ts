import { config } from "../config";
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
        return `${basePath}/icons/11d.svg`;
    }
    if (weatherData.includes('rain')) {
        return `${basePath}/icons/09d.svg`;
    }
    if (weatherData.includes('Sunny')) {
        return `${basePath}/icons/01d.svg`;
    }
    return `${basePath}/icons/04d.svg`;
}
export async function fetchWeather(searchQuery:any) {
    const response = await fetch(`${config.baseUrl}/forecast.json?key=${config.apiKey}&q=${searchQuery}&days=5`);
    const data = await response.json();
    if(!data.error){
     return data;
    }
    else{
        return null;
    }
  }
export async function fetchLocationName(latitude:any,longitude:any){
   const response = await fetch(`${config.geoBaseUrl}?lat=${latitude}&lon=${longitude}&apiKey=${config.geoApiKey}`)
  const data = await response.json();
  if(data){
    return data;
  }
  else{
    return null;
  }
}
export  let triggers = {
    "normal":{mode: 'normal', message: 'Fetching Weather Details...', lifetime: 3},
    "success":{mode: 'success', message: 'Weather Details Fetched',lifetime: 4},
    "error":{mode: 'danger', message: 'Please enter a valid location',lifetime: 4},
}