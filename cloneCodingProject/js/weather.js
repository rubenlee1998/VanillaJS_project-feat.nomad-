const API_KEY = "46e0d708d67a0689c0b30808f41e8b2c";



function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        const temp = Math.round(data.main.temp);
        weather.innerText = `${data.weather[0].main} / ${temp}℃`;
    });
};

function onGeoError() {
    alert("Can't find you. No weather for you.")
};
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);