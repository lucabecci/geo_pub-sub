const express = require("express")
const morgan = require("morgan")

const NatzuContainer = function NatzuContainer(){
    this.server = null
    this.config = require('../../configs/configurations.json').natzu
}

NatzuContainer.prototype.start = function init(){
    const app = express()
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
    app.use(express.urlencoded({extended: false, limit: "50mb"}))
    app.use(express.json())
    app.use(morgan("dev"))
}