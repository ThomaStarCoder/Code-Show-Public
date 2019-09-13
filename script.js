window.onload = () => {

    var weatherButton = document.getElementById('submitWeather')
    var weatherDiv = document.getElementById('weather')

    var city = document.getElementById('city')
    weatherButton.onclick = () => {
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=6c99751a079977eb1f96de55efe1e161`
        let request = new XMLHttpRequest()

        request.open('GET', weatherUrl, true)
        request.onload = () => {

            let data = JSON.parse(request.response)
            weatherDiv.innerText = `The weather in ${city.value} will be: ${data.main.temp}`

            console.log(data);
        }
        request.send();
    }

}
