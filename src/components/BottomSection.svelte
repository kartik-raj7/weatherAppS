<script lang="ts">
    import ForecastComponent from "./common/ForecastComponent.svelte";
    export let weatherData: any;
</script>

<main class="w-full flex justify-center items-center h-2/4 my-4 sm:my-0">
    <div class="flex justify-center items-center rounded-xl h-3/4 w-4/5 sm:w-full lg:w-4/5 opacity-90 py-8 sm:py-0" style=" background-color:rgba(255,255,255,0.1)">
      <div class="flex flex-col sm:flex-row justify-between w-full items-center z-10">
        {#each weatherData.forecast.forecastday as forecastItem}
          <ForecastComponent currentForecast={forecastItem}/>
        {/each}
      </div>
    </div>
  </main>

<style>
</style>
