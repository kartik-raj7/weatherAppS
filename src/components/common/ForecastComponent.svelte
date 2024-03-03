<script lang="ts">
    export let currentForecast:any;
    import { getDayOfWeek, getImageForWeather } from "../../utils/utils";
    let baseUrl = '../../../';
</script>

<main class="w-full flex flex-col justify-center items-center py-3 sm:py-0">
 <div class="text-white text-xl font-bold">
 {getDayOfWeek(currentForecast.date)}
 </div>
 <div class="flex sm:block pt-1 sm:pt-0">
 <div class=""><div class="flex justify-center items-center"><img src={getImageForWeather(currentForecast.day.condition.text,baseUrl)} alt="weatherImage" class="pr-4 sm:pr-0 sm:h-8 md:h-10 lg:h-full"/></div></div>
 <div class="flex justify-center flex-col sm:items-center">
 <div class="text-white">{currentForecast.day.mintemp_c} - {currentForecast.day.maxtemp_c}</div>
 <div class="text-white">{currentForecast.day.condition.text}</div>
</div>
</div>
</main>

<style>
 
</style>


