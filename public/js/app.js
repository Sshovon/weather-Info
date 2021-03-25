//const { response } = require("express");


const getWeatherData = function (address) {
    fe/weather?address='+encodeURIComponent(address)).
    then(res => {
        return res.json()
    }).
        then(data => {
            console.log(data);
        if (data.error) {
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = data.forecast.description;
            messageTwo.textContent = data.location;
        }
    }).catch((error) => {
        console.log(error);
});

}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    messageTwo.textContent = "";
    messageOne.textContent = "";
    const location = search.value;
    getWeatherData(location);
})
