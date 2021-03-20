const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const url = 'http://api.weatherstack.com/current?access_key=5457ac2399751a8f03dd63625fe4baa8&query=37.8267,-122.4233';

geocode(process.argv[2], (error,data) => {
    
    if (error) {
        return console.log(error);
    } 

    forecast(data.latitude,data.longitude, (error, fdata) => {
        if (error) {
            return console.log(error);
        }
        console.log(data.location);
        console.log(fdata.time);
        console.log('current temperature is ',fdata.temperature);
        console.log(fdata.feelsLike);

    })
    
})

