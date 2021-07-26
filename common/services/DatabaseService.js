const {PrismaClient} = require("@prisma/client")

const DatabaseService = function DatabaseService(){
    this.prisma = new PrismaClient();
}

DatabaseService.prototype.connect = async function connect(){
    let repeat = 5
    while(repeat){
        try{
            await this.prisma.$connect()
            console.log("MongoDB/Prisma database connected")
            break
        }
        catch(e){
            console.log(e)
            repeat--
            console.log("repeats left:", repeat)
        }
    }
    return
}

DatabaseService.prototype.disconnect = async function disconnect(){
    await this.prisma.$disconnect()
    console.log("MongoDB/Prisma database disconnected")
    return

}

module.exports = DatabaseService