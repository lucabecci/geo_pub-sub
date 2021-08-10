const express = require("express")
const morgan = require("morgan")
const LoggerService = require("../../common/services/LoggerService")
const NatzuContainer = function NatzuContainer(){
    this.server = null
    this.config = require('../../configs/configurations.json').natzu
    // this.logger = new LoggerService(this.config.NAMESPACE)
}

NatzuContainer.prototype.start = function init(){
    const app = express()
    global.redis.lget()
    global.redis.lsuscribe("test")
    server_conf(app)
    this.server = app.listen(this.config.PORT, () => {
        console.log(`${this.config.NAMESPACE} on port:`, this.config.PORT)
    })
}

NatzuContainer.prototype.close = function close(){
    this.server.close(() => {
        console.log(`${this.config.NAMESPACE} closing...`)
    })
}
function server_conf(app){
    app.get("/v1/ping", function(req, res){
        return res.status(200).json({
            namespace: config.NAMESPACE,
            enviroment: config.NODE_ENV,
            port: config.PORT,
            country: config.TENANT,
            process_type: config.TYPE
        })
    })
}

module.exports = NatzuContainer