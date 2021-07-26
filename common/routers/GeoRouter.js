const { Router } = require("express")
const GeoController = require("../controllers/GeoController")

const GeoRouter = function GeoRouter(){
    this.router = Router()
    this.geoController = new GeoController()
}

GeoRouter.prototype.config = function config(){
    this.router.get("/all", this.geoController.getAll)
    this.router.get("/fake", this.geoController.fakeSend)
}

const router = new GeoRouter()
router.config()

module.exports = router.router

