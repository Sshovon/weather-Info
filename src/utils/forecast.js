const request = require('postman-request');



const forecast = (latitude, longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5457ac2399751a8f03dd63625fe4baa8&query=' + latitude + ',' + longitude ;
    
    request({ url, json: true }, (error,{body}={}) => {
        if (error) {
            callback('connection interepted with forcast service');
        } else if (body.error) {
            callback('Please specify a valid location identifier using the query parameter.');
        } else {
            callback(undefined, {
                time: body.location.localtime,
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike,
            });
        }
    })

}


module.exports = forecast; 