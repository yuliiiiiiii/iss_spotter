const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json',(error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) { //conncetion succeed but no IP found
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(new Error(msg), null);
    }

    const ip = JSON.parse(body).ip; //just to get the value
  callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const returned = JSON.parse(body);
    if (!returned.success) {
      const msg = `Success status was ${returned.success}. Server message says: ${returned.message} when fetching for IP ${returned.ip}`;
      callback(new Error(msg), null);
      return;
    }

    const data = {latitude:returned.latitude, longitude:returned.longitude};
    callback(null, data);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };