<script lang="ts">
   import { onMount } from 'svelte';
  import Topbar from "../../components/Topbar.svelte";
  import MidSection from "../../components/MidSection.svelte";
  import BottomSection from "../../components/BottomSection.svelte";
  import { fetchWeather, triggers } from '../../utils/utils';
  import { Notifications,acts } from '@tadashi/svelte-notification';
  let weatherData:any = null;
  let searchQuery = "meerut";
  let getWeather = null
  async function loadData() {
    acts.add(triggers.normal);
    getWeather = await fetchWeather(searchQuery);
    if (typeof getWeather === 'object' && getWeather !== null) {
    weatherData = getWeather;
    updateBackground();
    acts.add(triggers.success);
   }
   else{
    acts.add(triggers.error);
   } 
  }

  export async function searchWeather(query:any) {
    searchQuery = query;
    await loadData();
  }

  onMount(loadData);

  function updateBackground() {
    const isDay = isDayTime(weatherData?.location?.localtime);
    const backgroundUrl = isDay ? '../../../backgroundday.png' : '../../../backgroundnight.png';
    const weatherContainer = document.querySelector('.weather-container');
    if (weatherContainer) {
      weatherContainer.style.backgroundImage = `url('${backgroundUrl}')`;
      weatherContainer.style.borderRadius = '25px';
    }
  }

  function isDayTime(lastUpdated:any) {
    if (!lastUpdated) return true; 
    const lastUpdatedHour = new Date(lastUpdated).getHours();
    return lastUpdatedHour >= 6 && lastUpdatedHour < 18;
  }
</script>

<main class="main">
  <div class="weather-container">
    {#if weatherData}
    <Notifications/>
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
    background-repeat: repeat;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .weather-container{
    position: relative; 
    display: flex;
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
  @media(max-width:1024px){
    .weather-container{
      width: 90%;
    }
  }
  @media(max-width:576px){
  .weather-container{
    width: 100%;
    border-radius: 0px !important;
  }
  
}
</style>