const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
 
  fetchCoordsByIP(ip, (error, data) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    console.log('it wored! Returned coordinates:', data);
  });

});

