<script lang="ts">
    import ForecastComponent from "./common/ForecastComponent.svelte";
    export let weatherData;
    console.log(weatherData)
</script>

<main class="w-full flex justify-center items-center h-2/4">
    <!-- Background container with opacity -->
    <div class="flex justify-center items-center rounded-xl h-3/4 w-4/5 opacity-90" style=" background-color:rgba(255,255,255,0.1)">
      <!-- Content container without opacity -->
      <div class="flex flex-row justify-between w-full items-center z-10">
        {#each weatherData.forecast.forecastday as forecastItem}
          <ForecastComponent currentForecast={forecastItem}/>
        {/each}
      </div>
    </div>
  </main>

<style>
 .backgroundc{
    background-color: rgba(255,255,255,0.3);
 }
</style>
