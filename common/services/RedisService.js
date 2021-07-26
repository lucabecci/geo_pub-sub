const redis = require("redis")

const RedisService = function RedisService(){
    this.client = redis.createClient({
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PASS
    })
    console.log("Redis-Pub/Sub connected")
}

RedisService.prototype.lpush = function lpush(channel, message){
    this.client.publish(channel, JSON.stringify(message))
}

RedisService.prototype.lget = function lget(channel){
    this.client.subscribe(channel)
    this.client.on("message", (ch, msg) => {
        console.log(msg)
    })
}

module.exports = RedisService