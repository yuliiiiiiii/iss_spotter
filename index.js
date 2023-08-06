const { fetchMyIP, fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss');

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
    fetchISSFlyOverTimes(data, (error, passTimes) => {
      if (error) {
        console.log("it didn't work!", error);
        return;
      }
      //  console.log('It worked! Returned flyover times:', passTimes);
    });
  });

});

