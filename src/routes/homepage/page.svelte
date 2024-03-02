<script lang="ts">
  import { onMount } from 'svelte';
  import Topbar from "../../components/Topbar.svelte";
  import MidSection from "../../components/MidSection.svelte";
  import BottomSection from "../../components/BottomSection.svelte";
  let weatherData = null;
  let searchQuery = "meerut";
  async function fetchData() {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2c5b1f1f6d054f43a0e70657240103&q=${searchQuery}&days=5`);
    const data = await response.json();
    if(!data.error){
    weatherData = data;
    }
  }

  export async function searchWeather(query) {
    searchQuery = query;
    await fetchData();
    updateBackground();
  }

  onMount(async () => {
    await fetchData();
    updateBackground();
  });

  function updateBackground() {
    const isDay = isDayTime(weatherData?.location?.localtime);
    const backgroundUrl = isDay ? '../../../backgroundday.png' : '../../../backgroundnight.png';
    const weatherContainer = document.querySelector('.weather-container');
    if (weatherContainer) {
      weatherContainer.style.backgroundImage = `url('${backgroundUrl}')`;
      weatherContainer.style.borderRadius = '25px';
    }
  }

  function isDayTime(lastUpdated) {
    if (!lastUpdated) return true; 
    const lastUpdatedHour = new Date(lastUpdated).getHours();
    console.log(lastUpdatedHour)
    return lastUpdatedHour >= 6 && lastUpdatedHour < 18;
  }
</script>

<main class="main">
  <div class="weather-container">
    {#if weatherData}
    <Topbar  searchWeather={searchWeather} weatherData={weatherData}/>
      <MidSection {weatherData} />
      <BottomSection {weatherData} />
    {:else
    
    }
    <div class="h-full flex justify-center items-center">
      <img src='../../../loader.gif' alt='loader' class="h-48"/>
    </div>
    {/if}
  </div>
</main>

<style>
  .main{
    background:url('/fullpage-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .weather-container{
    position: relative; 
    display: flex;
    /* justify-content: center; */
    width: 70%;
    flex-direction: column;
}
@media(min-width:576px){
  .weather-container{
    height: 90vh;
  }
}

.weather-container::before {    
      content: "";
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.95;
      border-radius: 25px;
}
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  @media(max-width:1024px){
    .weather-container{
      width: 90%;
    }
  }
</style>