<script lang="ts">
    export let weatherData;
    </script>
    
    <main class="w-full flex justify-center items-center h-2/4">
     <div class="flex flex-row justify-between w-4/5">
    <div class=' w-3/5'>
      <div class="flex">
        <div class="text-8xl text-white opacity-80">{weatherData?.current?.feelslike_c}</div>
      <div class="flex flex-col justify-end">
        <div class="flex flex-row text-2xl text-white opacity-80">
            <button>°C</button> <span class="px-4">|</span>
            <button>°F</button>
        </div>
        <div class="text-xl text-white opacity-80">{weatherData?.current?.condition?.text}</div>
    </div>
      </div>
     
    </div>
      <div class="flex flex-row items-center w-2/5">
        <div class="w-2/4 opacity-80"><img src='../../icons/01d.svg'/></div>
        <div class="flex flex-col w-2/4 justify-evenly">
            <div class="flex flex-row justify-center items-center text-white opacity-80"><img src='../../icons/feels-like.svg' class="h-4 w-4 opacity-80"/>Feels like {weatherData?.current?.feelslike_c}</div>
            <div  class="flex justify-center items-center text-white opacity-80"><img src='../../icons/humidity.svg' class="h-4 w-4 opacity-80"/> Humidity {weatherData?.current?.humidity}</div>
            <div   class="flex justify-center items-center text-white opacity-80"><img src='../../icons/wind.svg' class="h-4 w-4 opacity-80"/> Wind {weatherData?.current?.gust_kph}</div>
        </div>

      </div>
     </div>
    </main>
    
    <style>
     
    </style>
    