class Logger {
    loggerName;
    constructor(loggerName) {
        this.loggerName = loggerName;
    }

    debug(message) {
        console.log(`[ ${new Date().toISOString()} ] [ ${this.loggerName} / DEBUG ] : ${message}`)
    }

    info(message) {
        console.log(`[ ${new Date().toISOString()} ] [ ${this.loggerName} / INFO ] : ${message}`)
    }

    warn(message) {
        console.log(`[ ${new Date().toISOString()} ] [ ${this.loggerName} / WARNING ] : ${message}`)
    }

    error(message) {
        console.log(`[ ${new Date().toISOString()} ] [ ${this.loggerName} / ERROR ] : ${message}`)
    }

    fatal(message) {
        console.log(`[ ${new Date().toISOString()} ] [ ${this.loggerName} / FATAL ] : ${message}`)
    }
}

module.exports = Logger;