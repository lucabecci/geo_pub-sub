const { Router } = require("express")
const IndexController = require("../controllers/IndexController")

const IndexRouter = function IndexRouter(){
    this.router = Router()
    this.indexController = new IndexController()
}

IndexRouter.prototype.config = function config(){
    this.router.get("/", this.indexController.index)
    this.router.get("/queue/test", this.indexController.testQueue)
}

const router = new IndexRouter()
router.config()

module.exports = router.router

