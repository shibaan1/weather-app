// ⚠️ WARNING: This is a personal API key for development
// Get your own FREE API key from: https://openweathermap.org/api
// DO NOT use this key in your projects!
const API_KEY = "31d28874153c734fbe33e28d609edc8b"


const search_input = document.getElementById("search-input")

const search_btn = document.getElementById("search-btn")
const city_name = document.getElementById("city-name")
const temperature_display = document.getElementById("temperature-display")
const weather_icon = document.getElementById("weather-icon")
const description = document.getElementById("description")
const humidity = document.getElementById("humidity")
const wind_Speed = document.getElementById("wind-speed")

const card1 = document.getElementById("card1")
const day_1 = document.getElementById("day-1") 
const temperature_display_1 = document.getElementById("temperature-display-1")
const weather_icon_1 = document.getElementById("weather-icon-1")
const description_1 = document.getElementById("description-1")

const card2 = document.getElementById("card2")
const day_2 = document.getElementById("day-2") 
const temperature_display_2 = document.getElementById("temperature-display-2")
const weather_icon_2 = document.getElementById("weather-icon-2")
const description_2 = document.getElementById("description-2")

const card3 = document.getElementById("card3")
const day_3 = document.getElementById("day-3") 
const temperature_display_3 = document.getElementById("temperature-display-3")
const weather_icon_3 = document.getElementById("weather-icon-3")
const description_3 = document.getElementById("description-3")

const card4 = document.getElementById("card4")
const day_4 = document.getElementById("day-4") 
const temperature_display_4 = document.getElementById("temperature-display-4")
const weather_icon_4 = document.getElementById("weather-icon-4")
const description_4 = document.getElementById("description-4")


async function getWeatherData(city){

    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    catch(error){
        console.log(error)

    }
}

function displayWeather(data){
    city_name.textContent = data.name
    temperature_display.textContent =` ${data.main.temp}°C`
    description.textContent = data.weather[0].description
    weather_icon.src= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    humidity.textContent = `Humidity : ${data.main.humidity}`
    wind_Speed.textContent = `wind speed : ${data.wind.speed}`

}

search_btn.addEventListener('click' , async ()=>{

    const city = search_input.value
    const data = await getWeatherData(city)
    displayWeather(data)

})