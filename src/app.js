const express = require('express');
const path = require('path');
const hbs = require('hbs');


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
        title: 'weather app',
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

