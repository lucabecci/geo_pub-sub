const GeoService = function GeoService(){}

GeoService.prototype.getAll = async function getAll(){
    const geolocations = global.db.geo.findMany()
    return geolocations
}

module.exports = GeoService