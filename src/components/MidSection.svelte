<script lang="ts">
  import { getImageForWeather } from "../utils/utils";

    export let weatherData:any;
    let baseUrl = "../../"
    let temp =true;
    </script>
    
    <main class="w-full flex justify-center items-center h-2/4 py-8 sm:py-0">
     <div class="flex flex-col sm:flex-row md:justify-between w-11/5 sm:w-4/5">
    <div class='w-full sm:w-2/4 md:w-3/5'>
      <div class="flex items-center justify-center sm:justify-start">
        <div class="text-6xl sm:text-6xl md:text-8xl text-white opacity-80 flex"><img src={getImageForWeather(weatherData?.current?.condition?.text,baseUrl)} alt="WeatherImage" class="weather-icon-mobile"/>{temp?weatherData?.current?.feelslike_c:weatherData?.current?.feelslike_f}</div>
      <div class="flex flex-col justify-end pl-4">
        <div class="flex flex-row text-lg sm:text-2xl text-white opacity-80" style="{temp ?  'flex-direction: row;':'flex-direction: row-reverse;'}">
          <button on:click={() => temp = true}>°C</button> <span class="px-4">|</span>
            <button on:click={() => temp = false}>°F</button>
        </div>
        <div class="sm:text-lg md:text-xl text-white opacity-80 weather-text">{weatherData?.current?.condition?.text}</div>
    </div>
      </div>
      <div class="text-xl text-white opacity-80 weather-text-mobile flex justify-center pt-4">{weatherData?.current?.condition?.text}</div>
     
    </div>
      <div class="flex flex-row items-center w-full sm:w-2/4 md:w-2/5">
        <div class="w-2/4 opacity-80 flex justify-end weather-icon"><img src={getImageForWeather(weatherData?.current?.condition?.text,baseUrl)} alt="WeatherImage"/></div>
        <div class="flex flex-row sm:flex-col w-full sm:w-2/4 justify-evenly sm:items-center md:items-start lg:pl-4 pt-4 sm:pt-0">
            <div class="flex flex-row justify-center items-center text-white opacity-80"><img src='../../icons/feels-like.svg' class="h-4 w-4 opacity-80" alt="FeelsLikeIcon"/>Feels like {weatherData?.current?.feelslike_c}</div>
            <div  class="flex justify-center items-center text-white opacity-80"><img src='../../icons/humidity.svg' class="h-4 w-4 opacity-80" alt="HumidityIcon"/> Humidity {weatherData?.current?.humidity}</div>
            <div   class="flex justify-center items-center text-white opacity-80"><img src='../../icons/wind.svg' class="h-4 w-4 opacity-80" alt="WindIcon"/> Wind {weatherData?.current?.gust_kph}</div>
        </div>

      </div>
     </div>
    </main>
    
    <style>
      @media(max-width:634px){
     .weather-icon{
      display:none;
     }
     .weather-text{
      display: none;
     } 
    
    }
    .weather-icon-mobile{
      width: 60px;
      padding-right: 10px;
    }
     @media(min-width:634px){
      .weather-icon-mobile{
        display:none;
      }
      .weather-text-mobile{
        display: none;
      }
     }
    </style>
    