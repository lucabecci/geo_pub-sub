const log4js = require("log4js")

const LoggerService = function LoggerService(namespace){
    this.logger = log4js.configure({
        appenders: {trace: { type: "file", filename: `trace_${namespace}.log`}},
        categories: {default: {appenders: ["trace"], level: "ALL"}}
    }).getLogger("trace")
}

LoggerService.prototype.trace = function trace(message){
    this.logger.trace(message)
}
LoggerService.prototype.debug = function debug(message){
    this.logger.debug(message)
}
LoggerService.prototype.info = function info(message){
    this.logger.info(message)
}
LoggerService.prototype.warning = function warning(message){
    this.logger.warn(message)
}
LoggerService.prototype.error = function error(message){
    this.logger.error(message)
}
LoggerService.prototype.fatal = function fatal(message){
    this.logger.fatal(message)
}

module.exports = LoggerService