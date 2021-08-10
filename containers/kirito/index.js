const express = require("express")
const morgan = require("morgan")
const config = require('../../configs/configurations.json').kirito
const LoggerService = require("../../common/services/LoggerService")


const KiritoContainer = function KiritoContainer(){
    this.server = null
    this.config = config
    // this.logger = new LoggerService(this.config.NAMESPACE)
}

KiritoContainer.prototype.start = function start(){
    const app = express()
    server_conf(app)
    this.server = app.listen(this.config.PORT, () => {
        console.log(`${this.config.NAMESPACE} on port: ${this.config.PORT}`)
    })
}

KiritoContainer.prototype.close = function close(){
    this.server.close(() => {
        console.log(`${this.config.NAMESPACE} closing...`)
    })
}

function server_conf(app){
    app.use(express.urlencoded({extended: false, limit: "50mb"}))
    app.use(express.json())
    app.use(morgan("dev"))
    app.use("/v1", require("../../common/routers/IndexRouter"))
    app.use("/v1/geo", require("../../common/routers/GeoRouter"))
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


module.exports = KiritoContainer
