
const inputPlace = document.querySelector('#inputPlace');
const showInputValue = document.querySelector('#show-input-value');
const showWeather = document.querySelector('#show-weather');
const showFeelslike = document.querySelector('#show-feelslike'); 
const showRainChans = document.querySelector('#show-rain-chans');
const showHumidity = document.querySelector('#show-humidity');

const showWindSpeed = document.querySelector('#show-WindSpeed');
const showUvIndex = document.querySelector('#show-UV-Index');
const showPressure = document.querySelector('#show-Pressure');
const showVisibility = document.querySelector('#show-Visibility');



async function checkWeather(event) {
    event.preventDefault();

    const inputValue = inputPlace.value;

    localStorage.removeItem("Country/City");
    localStorage.setItem("Country/City", inputValue);

    
    const getApi_response = await axios(
        `https://api.weatherapi.com/v1/current.json?key=e0325e5772cf4dca8f6180742261509&q=${inputValue}`
    );
    
    console.log(getApi_response);
    

    showInputValue.innerHTML = inputValue;
    showWeather.innerHTML = 'Temperacher : ' + getApi_response.data.current.temp_c + '°C';
    showFeelslike.innerHTML = 'Temp Feelslike : ' + getApi_response.data.current.feelslike_c + '°C';
    showRainChans.innerHTML = 'Chans of rain : ' + getApi_response.data.current.chance_of_rain + '%';
    showHumidity.innerHTML = 'Humidity : ' + getApi_response.data.current.humidity + '%';

    showWindSpeed.innerHTML = 'WindSpeed : ' + getApi_response.data.current.humidity + ' km/h';
    showUvIndex.innerHTML = 'UvIndex : ' + getApi_response.data.current.humidity;
    showPressure.innerHTML = 'Pressure : ' + getApi_response.data.current.humidity + ' mb';
    showVisibility.innerHTML = 'Visibility : ' + getApi_response.data.current.humidity + ' km';

    
}


const savedCity = localStorage.getItem("Country/City");

if (savedCity) {
    showInputValue.innerHTML = savedCity;
}