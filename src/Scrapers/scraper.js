var scrapers = require('./scrapers');
const async = require('async');
const fetch = require('node-fetch')
var logger = require('../Models/chalk');


async function AnimeInfo(malID) {
    return await fetch("https://graphql.anilist.co/", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": "{\"query\":\"query ($id: Int) {\\n  Media (idMal: $id, type: ANIME) {\\n    id\\n    title {\\n      romaji\\n      english\\n      native\\n      userPreferred\\n    }\\n  }\\n}\",\"variables\":{\"id\":" + malID + "}}"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.error(err);
        });
}

async function getLinks(malID, episode) {
    let streams = [];

    var animeInfo = await AnimeInfo(malID);
    const titles = animeInfo.data.Media.title;
    return new Promise(resolve => {

        async.each(scrapers, (scraper, callback) => {

            scraper(titles, malID, episode)
                .then(scrapedStreams => {
                    if (scrapedStreams) {
                        streams = mergeArrays(streams, scrapedStreams);
                    }
                    callback();
                })
                .catch(() => {
                    callback();
                });
        }, () => {

            return resolve(streams);
        });
    });
}

module.exports = getLinks;


function mergeArrays(...arrays) {
    return [...new Set([].concat(...arrays))];
}