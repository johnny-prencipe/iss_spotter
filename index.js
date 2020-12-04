const { fetchMyIP } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didn\'t work!', error);
  }
  console.log('It worked! Your IP: ', ip)
});