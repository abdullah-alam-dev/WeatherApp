const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api_key = "e83b2c13b47e7bcc5092ab1c7c8fd625";

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const error = document.querySelector(".error");
const weather_icon = document.querySelector(".weather-icon");
const fullapp=document.querySelector(".weather");

async function weather_investigator(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    if (response.status == 404) {
        error.style.display = "block";
        fullapp.style.display="none";

    } else {
        fullapp.style.display="block";
         error.style.display = "none";
        const parsed_data = await response.json();
        document.querySelector(".city").innerHTML = parsed_data.name;
        document.querySelector(".temp").innerHTML = Math.round(parsed_data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = parsed_data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = parsed_data.wind.speed + "km/h";

        if (parsed_data.weather[0].main == "Clouds") {
            weather_icon.src = "./weather-app-img/images/clouds.png";
        } else if (parsed_data.weather[0].main == "Clear") {
            weather_icon.src = "./weather-app-img/images/clear.png";
        } else if (parsed_data.weather[0].main == "Rain") {
            weather_icon.src = "./weather-app-img/images/rain.png";
        } else if (parsed_data.weather[0].main == "Drizzle") {
            weather_icon.src = "./weather-app-img/images/drizzle.png";
        } else if (parsed_data.weather[0].main == "Mist") {
            weather_icon.src = "./weather-app-img/images/mist.png";
        }
    }
}

button.addEventListener("click", () => {
    weather_investigator(input.value);
});
