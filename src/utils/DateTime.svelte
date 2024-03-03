<script lang="ts">
    import { onMount } from 'svelte';
let currentDateTime = new Date();

    onMount(() => {
        const interval = setInterval(() => {
            currentDateTime = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

function getWeekDay(c:any) {
    let daysList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return daysList[c.getDay()];
}
function getMonth(c:any) {
    let monthsList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return monthsList[c.getMonth()];
}
function getDate(c:any) {
    return c.getDate();
}
function getHour(c:any) {
    return c.getHours() % 12 || 12;
}
function getMinute(c:any) {
    return c.getMinutes() < 10 ? "0" + c.getMinutes() : c.getMinutes();
}
function getMeridiem(c:any) {
    return c.getHours() < 12 ? "AM" : "PM";
}
</script>

<style>
</style>


<div class="container">
    <div class="date-time">
        <span class="date">{getWeekDay(currentDateTime)} {getMonth(currentDateTime)} {getDate(currentDateTime)}</span>
        <span class="time">{getHour(currentDateTime)}:{getMinute(currentDateTime)} {getMeridiem(currentDateTime)}</span>
    </div>
</div>