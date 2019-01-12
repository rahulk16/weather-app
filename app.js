const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      alias: 'address',
      demand: true,
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

<<<<<<< HEAD
geocode.geocodeAddress(argv.address,(errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else {
    console.log(JSON.stringify(results,undefined,2));
  }
=======
// console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=[API_KEY]`,
  json:true
},(error,response,body) => {
  console.log(`Formatted address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
>>>>>>> ce7fdcd15b77b1ece5b43946d6e2bf501a8c0a35
});
