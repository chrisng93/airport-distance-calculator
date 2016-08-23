const milesToNauticalMiles = 0.868976;
const statuteMilesInNauticalMile = 1.15078;

module.exports = {
  calcDistance: (lat1, lon1, lat2, lon2) => {
    // using Haversine formula to calculate nautical distance between 2 lat/lon points
    const radLat1 = Math.PI * lat1 / 180;
    const radLat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radTheta = Math.PI * theta / 180;
    let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
		dist = Math.acos(dist);
		dist *= 180 / Math.PI;
		dist *= 60 * statuteMilesInNauticalMile;
		dist *= milesToNauticalMiles;
		return dist;
  }
};
