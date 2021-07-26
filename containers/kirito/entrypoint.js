const KiritoContainer = require("./index")

function entrypoint(){
    const container = new KiritoContainer()
    container.start()
}
entrypoint()