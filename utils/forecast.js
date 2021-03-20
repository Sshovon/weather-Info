const request = require('postman-request');



const forecast = (latitude, longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5457ac2399751a8f03dd63625fe4baa8&query=' + latitude + ',' + longitude + '&unit=f';
    
    request({ url: url, json: true }, (error,response) => {
        if (error) {
            callback('connection interepted with forcast service');
        } else if (response.body.error) {
            callback('Please specify a valid location identifier using the query parameter.');
        } else {
            callback(undefined, {
                time: response.body.current.observation_time,
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike,
            });
        }
    })

}


module.exports = forecast; 