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
const current_day = document.getElementById("current-day")
const error_message = document.getElementById('error-message')
const loading = document.getElementById('loading')

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


async function getWeatherData(city) {

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log(error)
    }
}

function displayWeather(data) {
    city_name.textContent = data.name
    temperature_display.textContent = ` ${data.main.temp}°C`
    description.textContent = data.weather[0].description
    weather_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    humidity.textContent = `Humidity : ${data.main.humidity}`
    wind_Speed.textContent = `wind speed : ${data.wind.speed}`
    current_day.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long' })

}

search_btn.addEventListener('click', async () => {

    const city = search_input.value

    error_message.textContent = ''
    loading.textContent = ''

    if (city === "") {
        error_message.textContent = 'please enter city name'
        return
    }

    loading.textContent = 'Loading....'

    const data = await getWeatherData(city)

    if (data.cod === '404') {
        loading.textContent = ''
        error_message.textContent = 'city not found. Please try again'
        return
    }

    displayWeather(data)

    const forecast_data = await getForecastData(city)
    displayForecast(forecast_data)

    loading.textContent = ''
})

async function getForecastData(city) {

    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`

        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

function displayForecast(forecast_data) {

    const noonForecast = forecast_data.list.filter(item => item.dt_txt.includes("12:00:00"))

    day_1.textContent = new Date(noonForecast[0].dt_txt).toLocaleDateString('en-US', { weekday: 'long' })
    temperature_display_1.textContent = noonForecast[0].main.temp
    description_1.textContent = noonForecast[0].weather[0].description
    weather_icon_1.src = `https://openweathermap.org/img/wn/${noonForecast[0].weather[0].icon}@2x.png`

    day_2.textContent = new Date(noonForecast[1].dt_txt).toLocaleDateString('en-US', { weekday: 'long' })
    temperature_display_2.textContent = noonForecast[1].main.temp
    description_2.textContent = noonForecast[1].weather[0].description
    weather_icon_2.src = `https://openweathermap.org/img/wn/${noonForecast[1].weather[0].icon}@2x.png`

    day_3.textContent = new Date(noonForecast[2].dt_txt).toLocaleDateString('en-US', { weekday: 'long' })
    temperature_display_3.textContent = noonForecast[2].main.temp
    description_3.textContent = noonForecast[2].weather[0].description
    weather_icon_3.src = `https://openweathermap.org/img/wn/${noonForecast[2].weather[0].icon}@2x.png`

    day_4.textContent = new Date(noonForecast[3].dt_txt).toLocaleDateString('en-US', { weekday: 'long' })
    temperature_display_4.textContent = noonForecast[3].main.temp
    description_4.textContent = noonForecast[3].weather[0].description
    weather_icon_4.src = `https://openweathermap.org/img/wn/${noonForecast[3].weather[0].icon}@2x.png`


}