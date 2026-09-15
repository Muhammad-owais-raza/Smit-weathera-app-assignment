
const showWeather = document.querySelector('#show-weather');
const showHumidity = document.querySelector('#show-humidity');



async function checkWeather(event) {
    event.preventDefault();

    const inputPlace = document.querySelector('#inputPlace').value;
    
    const getApi_response = await axios(
        `https://api.weatherapi.com/v1/current.json?key=e0325e5772cf4dca8f6180742261509&q=${inputPlace}`
    );
    

    showWeather.innerHTML = `${inputPlace} Temperacher : ${getApi_response.data.current.temp_c}`;

    

}

