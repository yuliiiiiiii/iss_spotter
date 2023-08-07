const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json'); //it returns a promise(error or body)
}

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip
  return request(`http://ipwho.is/${ip}`);
}

const fetchISSFlyOverTimes = function(body) {
  const returned = JSON.parse(body);
  const coords = {latitude: returned.latitude, longitude: returned.longitude};
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(body => fetchCoordsByIP(body))
    .then(body => fetchISSFlyOverTimes(body))
    .then(body => {
      const response = JSON.parse(body).response;
      return response; // return a new promise from nextISSTimesForMyLocation
  });
};



module.exports = { nextISSTimesForMyLocation };