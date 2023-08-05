const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json',(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) { //conncetion succeed but no IP found
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip; //just to get the value
    callback(null, ip);
  });
};

module.exports = { fetchMyIP };