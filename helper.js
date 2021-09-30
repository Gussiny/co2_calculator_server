
/**
 * Get user total carbon footprint
 * @param {Object} userData Users miles data
 * 
 * @returns {Float} Total Carbon Footprint
**/
function getCarbonFootprint( userData ) {
    const co2Car = 8.887;
    const co2Public = 3.33;
    const co2Airplane = 24176.47;
    const co2WalkBike = 0;

    let totalCar = userData.car * co2Car;
    let totalPublic = userData.public * co2Public;
    let totalAirplane = userData.airplane * co2Airplane;
    let totalWalkBike = userData.bycicle_walking * co2WalkBike;

    let total = (totalCar + totalPublic + totalAirplane + totalWalkBike) / 1000;

    return total.toFixed(3);
}

module.exports.getCarbonFootprint = getCarbonFootprint;
