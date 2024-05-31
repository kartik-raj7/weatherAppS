<script lang="ts">
   import { onMount } from 'svelte';
  import Topbar from "../../components/Topbar.svelte";
  import MidSection from "../../components/MidSection.svelte";
  import BottomSection from "../../components/BottomSection.svelte";
  import { fetchWeather, triggers } from '../../utils/utils';
  import { Notifications,acts } from '@tadashi/svelte-notification';
  let weatherData:any = null;
  let searchQuery = "meerut";
  let getWeather = null;
  let visible = true;
  async function loadData() {
    acts.add(triggers.normal);
    getWeather = await fetchWeather(searchQuery);
    visible=false;
    if (typeof getWeather === 'object' && getWeather !== null) {
    weatherData = getWeather;
    acts.add(triggers.success);
   }
   else{
    acts.add(triggers.error);
   } 
   visible = true;
    setTimeout(()=>{
      updateBackground();
    })
  }

  export async function searchWeather(query:any) {
    searchQuery = query;
    visible= false
    await loadData();
  }

  onMount(loadData);

  function updateBackground() {
    const isDay = isDayTime(weatherData?.location?.localtime);
    console.log(isDay)
    const backgroundUrl = isDay ? '../../../backgroundday.png' : '../../../backgroundnight.png';
    const weatherContainer = document.querySelector('.weather-container') as HTMLElement | null;
    console.log(weatherContainer)
    if (weatherContainer) {
      weatherContainer.style.backgroundImage = `url('${backgroundUrl}')`;
    }
  }

  function isDayTime(lastUpdated:any) {
    if (!lastUpdated) return true; 
    const lastUpdatedHour = new Date(lastUpdated).getHours();
    return lastUpdatedHour >= 6 && lastUpdatedHour < 18;
  }
</script>

<main class="main">
    {#if weatherData && visible}
      <div class="weather-container">
        <Notifications/>
        <Topbar searchWeather={searchWeather} weatherData={weatherData}/>
        <MidSection {weatherData} />
        <BottomSection {weatherData} />
      </div>
    {:else}
      <div class="h-full flex justify-center items-center">
        <img src='../../../loader.gif' alt='loader' class="h-48"/>
      </div>
    {/if}
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
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
   }
    .weather-container{
    position: relative; 
    display: flex;
    width: 70%;
    flex-direction: column;
    animation: fadeIn 5s;
    border-radius: 25px;
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