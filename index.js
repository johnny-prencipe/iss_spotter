const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");



//might as well try with the example tester code too
//it works
// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

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