const request = require('request-promise-native');

const fetchMyIP = () => request('https://api.ipify.org?format=json')

const fetchCoordsByIP = (body) => request(`https://ipwhois.app/json/${JSON.parse(body).ip}`);

const fetchISSFlyOverTimes = (coords) => request(`http://api.open-notify.org/iss-pass.json?lat=${JSON.parse(coords).latitude}&lon=${JSON.parse(coords).longitude}`);

const nextISSTimesForMyLocation = (times) => {
  fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(times => JSON.parse(times));
}

module.exports = {
  nextISSTimesForMyLocation
};