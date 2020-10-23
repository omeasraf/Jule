const chalk = require('chalk');

// This is a custom console log class that will print out colorful texts to the console
// We are using chalk to conver the text into colorful texts
class logger {
    error(text) {
        text = typeof (text) == "object" ? JSON.stringify(text) : text;
        console.log(chalk.bold.red(text))
    }
    success(text) {
        text = typeof (text) == "object" ? JSON.stringify(text) : text;
        console.log(chalk.bold.greenBright(text))
    }
    warning(text) {
        text = typeof (text) == "object" ? JSON.stringify(text) : text;
        console.log(chalk.bold.yellow(text))
    }
    critical(text) {
        text = typeof (text) == "object" ? JSON.stringify(text) : text;
        console.log(chalk.blue.bgRed.bold(chalk.bold.white(text)))
    }
}

module.exports =
    logger;