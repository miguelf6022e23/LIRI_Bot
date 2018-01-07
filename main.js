var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "5be48cf01c984dac8327e84d7077af5e",
  secret: "c523c4a7b8584888a2f74f2d0ee3a79b"
});
 
/*spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});*/

var request = require('request');
/*request('http://www.omdbapi.com/?apikey=40e9cece&t=Matrix', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});*/

console.log(process.argv);