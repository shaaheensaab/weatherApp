const API_KEY = `10a77839acc0763c4507a48d63d29f29`;

async function loadWeather(city){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try{
        const res = await fetch(URL);
        const data = await res.json();

        displayLocation(data);
    }
    catch(err){
        console.log(err);
    }
}

const displayLocation = (data)  => {
    // console.log(data);
    const displyCity = document.getElementById('city');
    displyCity.innerText = data.name;

    const displayTemp = document.getElementById('temperature');
    displayTemp.innerText = data.main.temp;

    const displayWeather = document.getElementById('mood');
    displayWeather.innerText = data.weather[0].main;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadWeather(city);
    searchField.value = '';
})