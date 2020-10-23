var fs = require('fs');
var logger = require('./chalk');
var log = new logger()

class Cached {
    // Storing the crawled data to a local database,
    // A cloud database would be nice to have but isn't really necessary for this project
    write(data, malID, episode) {
        try {
            fs.writeFile("./src/database/cached/" + malID.toString() + "-" + episode.toString() + ".json", JSON.stringify(data), {flag: 'w+'}, function (err) {
                if (err) return log.error(err.toString());
            });
        } catch (e) {
            log.error(e.toString() + +" write")
        }
        return 1;
    }
    // Checking if the episode is already cached, if it is then we are returning the cached data 
    retrieve(malID, episode) {
        try {
            if (fs.existsSync("./src/database/cached/" + malID.toString() + "-" + episode.toString() + ".json")) {

                var data = fs.readFileSync("./src/database/cached/" + malID.toString() + "-" + episode.toString() + ".json", 'utf8');
                return data;
            } else {
                return null;
            }
        } catch (err) {
            log.error(err.toString() + " retrieve")
            return null;
        }
    }
}
module.exports = Cached;
