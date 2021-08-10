const GeoService = function GeoService(){}

GeoService.prototype.getAll = async function getAll(){
    const geolocations = global.db.geo.findMany()
    return geolocations
}

GeoService.prototype.getById = async function getById(id){
    const geolocation = global.db.geo.findOne()
}

module.exports = GeoService