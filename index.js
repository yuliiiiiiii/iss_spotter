const { nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     fetchISSFlyOverTimes(data, (error, passTimes) => {
//       if (error) {
//         console.log("it didn't work!", error);
//         return;
//       }
//       console.log(passTimes);
//     });
//   });
// });

const printOutString = function(timesArray) {
  for (let time of timesArray) {
    const datetime = new Date(0); //set the start date as today
    datetime.setUTCSeconds(time.risetime);
    console.log(`The next at ${datetime} for ${time.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  printOutString(passTimes);
});




// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     fetchISSFlyOverTimes(data, (error, passTimes) => {
//       if (error) {
//         console.log("it didn't work!", error);
//         return;
//       }
//       //  console.log('It worked! Returned flyover times:', passTimes);
//     });
//   });
// });