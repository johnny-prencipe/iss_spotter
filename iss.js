/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const failedStatusCheck = (resp) => {
  if (resp.statusCode !== 200) {
    const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
}

const fetchMyIP = (callback) => {
  request.get(`https://api.ipify.org?format=json`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    const myIP = JSON.parse(response.body);

    // if non-200 status, assume server error
    failedStatusCheck(response);

    // if we get here, all's well and we got the data
    callback(error, myIP.ip);
    return;
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request.get(`https://ipwhois.app/json/${ip}`, function(error, response, body) {

    if (error) {
      callback(error, null);
      return;
    }

    failedStatusCheck(response);

    const myLocation = JSON.parse(response.body);
    if (myLocation.success === false) {
      const msg = (`Error: invalid IP address. message from server: ${body}`);
      callback(Error(msg), null);
      return;
    }

    //if we got here, everything is good.
    const returnLocation = {
      latitude: myLocation.latitude,
      longitude: myLocation.longitude
    };

    callback(error, returnLocation);
  });
};



const fetchISSFlyOverTimes = function(coords, callback) {
  request.get(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    failedStatusCheck(response);
    const msgBody = JSON.parse(response.body);
    if (msgBody.message === 'failure') {
      const msg = `request failed. response from server: ${body}`;
      callback(Error(msg), null);
      return;
    }

    //if we get to this point, all is right with the world.
    callback(null, msgBody.response);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }
      fetchISSFlyOverTimes(coords, (error, data) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, data);
      });
    });
  });
}

// module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
module.exports = { nextISSTimesForMyLocation };

