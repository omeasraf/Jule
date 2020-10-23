# Jule
Crawl the web for links

[![Build Status](https://api.travis-ci.org/omeasraf/Jule.svg?branch=master)](https://travis-ci.org/omeasraf/Jule)

Jule crawls a predefined list of sites to find helpul information and links

  - You decide which sites Jule crawls
  - Can find trailers, movies, shows, anime and everything else
  - Jule is a web crawler framework, so you have complete control over everthing it does

# Features!

  - Requires an api key to use, you can customize how the data is returned (can use a module like cryptoJS to encrypt the output data)
  - Can crawl multiple sites and page
  - Fully customizable

### Tech

Jule uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [chalk] - Terminal string styling done right


### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd jule
$ npm install -d
$ npm start
```


#### Screenshots

**This crawler is not available for you to use, it was written as a proof of concept and has been removed from the framework**
> Note:
> - Jule doesn't include any crawler, you will have to design your own crawler

![Crunchyroll Crawler](https://raw.githubusercontent.com/omeasraf/Jule/master/Screenshots/crunchyroll.PNG)

See [example.js](https://github.com/omeasraf/Jule/blob/master/src/Scrapers/anime/example.js)

### Note
 - Only anime is currently supported, but movie support is coming in a future commit


### Todos
 - Store the cached data to a dedicated cloud database like mongoDB
 - Add movie and show support

License
----

MIT


**Free Software, Hell Yeah!**


   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [chalk]: <https://www.npmjs.com/package/chalk>
