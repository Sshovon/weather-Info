const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const { time } = require('console');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'shovon'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'help',
        name: 'shovon',
        helpText: 'helping'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'about',
        name: 'shovon'
    })
})

app.get('/weather', (req,res) => {
    if (!req.query.address) {
        return res.send({
            errorMessage: 'You must provide an address!'
        })
    }
    
    geocode(req.query.address, (error, {latitude,longitude,location}={}) => {
        if (error) {
            return res.send({
                error
            })
        }

        //console.log(latitude, longitude, location);
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error
                })
            }
            res.send({
                forecast: forecastData,
                location: location
            });
        })


    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'help not found',
        title: '404 help',
        name: 'shovon'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'cant load the page',
        title: 'Error page',
        name: 'shovon'
    })
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})

