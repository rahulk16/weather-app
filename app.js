const request = require('request');
const yargs = require('yargs');

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

// console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBn6KmjA5iqELqgjK2UsuOPwQjoyeg7PJw`,
  json:true
},(error,response,body) => {
  console.log(`Formatted address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
