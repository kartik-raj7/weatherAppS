<script lang="ts">
    export let currentForecast;
</script>

<main class="w-full flex flex-col justify-center items-center">
 <div class="text-white">
 {currentForecast.date}
 </div>
 <div class=""><div class="flex justify-center items-center"><img src='../../../icons/01d.svg' /></div></div>
 <div class="text-white">{currentForecast.day.mintemp_c} - {currentForecast.day.maxtemp_c}</div>
 <div class="text-white">{currentForecast.day.condition.text}</div>
</main>

<style>
 
</style>
