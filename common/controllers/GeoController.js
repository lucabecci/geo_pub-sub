const GeoService = require("../services/GeoService")
const uuid = require("uuid")
const RedisService = require("../services/RedisService")

const geoService = new GeoService()
const GeoController = function GeoController(){}

GeoController.prototype.geoOne = function getOne(req, res){
    const {id} = req.body
    if(!id){
        return res.status(400).json({ message: "Please send a geo id" })
    }
    return []
}

GeoController.prototype.getAll = async function getAll(req, res){
    const geolocations = await geoService.getAll()
    return res.status(200).json(geolocations)
}

GeoController.prototype.fakeSend = async function fakeSend(req, res){
    const id = uuid.v4()
    global.redis.lpush("test", id)
    return res.status(200).json({ message: "success send" })
}


module.exports = GeoController
