const KiritoContainer = require("./index")
const DatabaseService = require("../../common/services/DatabaseService")
function entrypoint(){
    const database = new DatabaseService()
    const container = new KiritoContainer()
    database.connect()
    global.db = database.prisma
    container.start()
}
entrypoint()