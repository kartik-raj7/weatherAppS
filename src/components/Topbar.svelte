<script lang="ts">
  import 'iconify-icon'
  import { fetchLocationName, triggers } from '../utils/utils';
  export let weatherData:any;
  export let search = "";
  export let searchWeather:any;
  let isFetching = false;
  async function handleSearch(event:any) {
    isFetching = true;
    await searchWeather(search);
    isFetching = false; 
  }
  function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

async function showPosition(position:any) {
   const {latitude,longitude} = position.coords;
  let locationDetails = await fetchLocationName(latitude,longitude);
  const {country} = locationDetails.features[0].properties;
  searchWeather(country);

}

  </script>
  
  <main class="w-full flex justify-center topbar">
    <div class="flex pt-8 w-11/12 sm:w-4/5 justify-between flex-col sm:flex-row">
    <div class="w-full sm:w-2/4 max-w-md mx-auto flex flex-row sm:flex-col justify-between items-center sm:items-start py-5 sm:py-0">
    <div class="text-2xl text-white opacity-80">{weatherData?.location?.name}</div>
    <div class="text-xl text-white opacity-80">{weatherData?.location?.localtime}</div>
    </div>
    <div class="w-full sm:w-3/4">
      <form class="max-w-md mx-auto">   
        <div class="flex w-full"> 
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" >Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search For city, pincode" required bind:value={search}/>
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" on:click={handleSearch} disabled={isFetching}>Search</button>
            
          </div>
          <div class="w-8 flex justify-center rounded"><button class="flex items-center justify-center" on:click={getLocation} type="button"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="40px" viewBox="0 0 24 24" class="opacity-80 ml-4">
            <path fill="white" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
          </svg></button></div>
        </div>
    </form>
    
    </div>
  </div>
  </main>
  
  <style>
   
  </style>
  