var express = require('express');
var config = require('./config')
var logger = require('./Models/chalk')
var scrapers = require('./Scrapers/scraper')
var cachedData = require('../src/Models/cached');

const log = new logger();
var cached = new cachedData();

const app = new express()
app.use(express.json());

app.get('/', (req, res) => {
    // Serving the html file from Defaults to the user who visits the api endpoint on browser
    res.set({
        'X-Powered-By': 'Jule'
    });
    res.set('x-timestamp', Date.now());
    res.sendFile('/index.html', {
        root: './src/Defaults'
    })
});



app.post('/', async (req, res) => {

    res.set({
        'X-Powered-By': 'Jule'
    });
    res.set('x-timestamp', Date.now());
    // Checking if the user sent valid data to us, and if they did, check if the api key matches or not
    try {
        if (req.body != null && req.body != undefined && req.body.api != null && req.body.api != undefined && req.body.malID != null && req.body.malID != undefined && req.body.ep != null && req.body.ep != undefined) {
           
            if (req.body.api == config.apiKey) {
                    var data = cached.retrieve(req.body.malID, req.body.ep);

                    if (data != null) {
                        res.send(data);
                    } else {
                        var scraped = await scrapers(req.body.malID, req.body.ep);

                        if (scraped != null) {
                            if (scraped.length != 0) {
                                var save = cached.write(scraped, req.body.malID, req.body.ep);
               
                                if (save == 1) {
                                   
                                    res.send(scraped)
                                }
                            } else {
                                res.send([]);

                            }
                        } else {
                            res.send([]);
                        }
                    }

                
            } else {
                res.status(400).send({
                    "error": 400,
                    "message": "Bad api key"
                });
            }
        } else {
            res.status(400).send({
                "error": 400,
                "message": "Invalid body sent"
            });
        }
    } catch (e) {

        log.error(e.toString())
        res.sendStatus(400)
    }
});

app.listen(config.port, () => {
    log.success(`App is running at http://localhost:${config.port}`);
});