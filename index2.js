const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passtimeArray) {
  for (let passtime of passtimeArray) {
    const date = new Date(0);
    date.setUTCSeconds(passtime.risetime);
    const duration = passtime.duration;
    console.log(`The next at ${date} for ${duration} seconds!`)
  } 
}

nextISSTimesForMyLocation()
 .then(response => printPassTimes(response))
 .catch(error => console.log("It didn't work:", error.message));




// fetchMyIP()
//  .then(body => fetchCoordsByIP(body))
//  .then(body => fetchISSFlyOverTimes(body))
//  .then(body => console.log(body));