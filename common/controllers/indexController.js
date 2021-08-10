const IndexController = function IndexController(){}

IndexController.prototype.index = function index(req, res){
    res.status(200).json({ message: "Welcome to my service of geo location"})
}

IndexController.prototype.testQueue = function testQueue(req, res){
    const id = uuid.v4()
    global.redis.lpush("test", id)
    return res.status(200).json({ message: "success send" })
}

module.exports = IndexController