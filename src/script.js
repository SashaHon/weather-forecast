const apiKey = '40bdb767d0dd9342ef02e1cab7d5bd6d';
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const descriptionElement = document.getElementById('description');
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');

function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const location = data.name;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const description = data.weather[0].description;

            locationElement.textContent = `Location: ${location}`;
            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            humidityElement.textContent = `Humidity: ${humidity}%`;
            descriptionElement.textContent = `Description: ${description}`;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

getWeatherBtn.addEventListener('click', () => {
    const userCity = cityInput.value;
    if (userCity) {
        getWeatherData(userCity);
    } else {
        alert('Please enter a city name.');
    }
});
