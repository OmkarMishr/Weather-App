var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

const apik = "0e0b212490aadf7de23b76057af0b74a";

function convertion(val){
    return(val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${ convertion(temperature)} c</span>`
        description.innerHTML=`sky conditions: <span>${descrip}<span>`
        wind.innerHTML = `Wind speed: <span>${windspeed} km/h<span>`
    })

    .catch(err => alert('You have entered wrong city name'))
})