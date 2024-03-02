<script lang="ts">
    export let currentForecast;
    import { getImageForWeather } from "../../utils/utils";
    let baseUrl = '../../../'
</script>

<main class="w-full flex flex-col justify-center items-center">
 <div class="text-white">
 {currentForecast.date}
 </div>
 <div class=""><div class="flex justify-center items-center"><img src={getImageForWeather(currentForecast.day.condition.text,baseUrl)} alt="weatherImage" class="sm:h-8 md:h-10 lg:h-full"/></div></div>
 <div class="text-white">{currentForecast.day.mintemp_c} - {currentForecast.day.maxtemp_c}</div>
 <div class="text-white">{currentForecast.day.condition.text}</div>
</main>

<style>
 
</style>


