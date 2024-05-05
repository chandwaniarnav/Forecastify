// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
        .then(response => response.json())
        .then(displayData)
        .catch(err => alert('Wrong City name'));
};

// Function to display weather data on HTML document
const displayData = (weather) => {
    temp.innerText = `${weather.main.temp}°C`;
    desc.innerText = `${weather.weather[0].main}`;
};

// Event listener for search button click
button.addEventListener('click', fetchWeatherData);

// Event listener for pressing 'Enter' key in the input field
inputvalue.addEventListener('keypress', function(event) {
    // Check if the key pressed is 'Enter' (key code 13)
    if (event.key === 'Enter') {
        // Call the function to fetch weather data
        fetchWeatherData();
    }
});