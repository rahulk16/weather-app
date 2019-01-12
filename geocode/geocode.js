const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=[API_KEY]`,
    json:true
  },(error,response,body) => {
    if(error){
      callback('Error! Unable to fetch data from Google server.');
    }else if (body.status === 'ZERO_RESULTS') {
        callback(body.status);
    }else if (body.status === 'OK') {
      callback(undefined,{
        Address:body.results[0].formatted_address,
        Latitude:body.results[0].geometry.location.lat,
        Longitude:body.results[0].geometry.location.lng});
    }else {
      console.log(body.status);
    }

  });
};

module.exports = {
  geocodeAddress,
}
