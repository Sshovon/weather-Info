
const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3Nob3ZvbiIsImEiOiJja21neTQyMWowMjBoMnFtdWY5M3U4Mmx0In0.bTsyDXi_n0VeF7e9i9pluA';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined);
        } else if (body.message==='Not Found') {
            callback('Unable to find location try another location', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
                 
            })        }
    })

}


module.exports = geocode;