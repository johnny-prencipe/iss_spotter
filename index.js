const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// const myLocation = { latitude: '49.1044302', longitude: '-122.801094' };
// fetchISSFlyOverTimes(myLocation, (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// });


// const ip = '50.67.52.3';
// fetchCoordsByIP(ip, (error, coords) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(coords);
// });

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//   }
//   console.log('It worked! Your IP: ', ip);
// });