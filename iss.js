/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const fetchMyIP = (callback) => {
  request.get(`https://api.ipify.org?format=json`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    const myIP = JSON.parse(response.body);

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if we get here, all's well and we got the data
    callback(error, myIP.ip);
    return;
  });
};

module.exports = { fetchMyIP };

