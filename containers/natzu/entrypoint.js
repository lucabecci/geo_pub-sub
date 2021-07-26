const NatzuContainer = require("./index")
const DatabaseService = require("../../common/services/DatabaseService")
const RedisService = require("../../common/services/RedisService")

function entrypoint(){
    const database = new DatabaseService()
    const redis = new RedisService()
    const container = new NatzuContainer()
    database.connect()
    global.db = database.prisma
    global.redis = redis
    container.start()
}
entrypoint()