var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "5be48cf01c984dac8327e84d7077af5e",
  secret: "c523c4a7b8584888a2f74f2d0ee3a79b"
});
 
var request = require('request');

var file = require('file-system');
var fs = require('fs');

/*spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});*/

function spotThis(song){
	spotify.search({ type: 'track', query: song }, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		} else {
			// console.log(data.tracks.items[0])
			console.log();
			var artS = 'Artists: ';
			for (i in data.tracks.items[0].artists){
				if (i != 0) {
					artS += ", ";
				}
				artS += data.tracks.items[0].artists[i].name;
			}
			console.log(artS);
			// console.log('Artists: ' + data.tracks.items[0].artists[0].name); //more than one artist?
			console.log('Song Name: ' + data.tracks.items[0].name);
			console.log('Preview Link: ' + data.tracks.items[0].external_urls.spotify);
			console.log('Album: ' + data.tracks.items[0].album.name);
		}
	});
}

function movieThis(movie){	
request('http://www.omdbapi.com/?apikey=40e9cece&t='+movie, function (error, response, body) {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body: ', body); 
  var body = JSON.parse(body);
  console.log('Title: ', body.Title);
  console.log('Year: ', body.Year);
  console.log('IMDB Rating: ', body.imdbRating);
  console.log('Rotten Tomato Score: ', body.Ratings[0].Value);
  console.log('Country: ', body.Country);
  console.log('Language: ', body.Language);
  console.log('Plot: ', body.Plot);
  console.log('Actors: ', body.Actors);
});
}
var request = require('request');

// console.log(process.argv[2]);
// console.log(process.argv[3]);

if (process.argv[2] == "spotify-this-song") {
	if (process.argv[3]){
		spotThis(process.argv[3]);
	} else {
		spotThis("The Sign");
	}

} else if (process.argv[2] == "my-tweets") {
	console.log('On the way')

} else if (process.argv[2] == "movie-this") { 
	if (process.argv[3]){
	movieThis(process.argv[3]);
	} else {
		movieThis('Mr. Nobody')
	}

} else if (process.argv[2] == "do-what-it-says") {
	// console.log("Understood");
	fs.readFile('random.txt', 'utf8', (err, data) => {
	  if (err){
	  	return console.log('Error occurred: ' + err);
	  }
	  data = data.split(' ');
	  var func = data[0];
	  var inp = data.splice(1);
	  inp = inp.join(' ');
	  // console.log(func);
	  // console.log(inp);
	
	//Dirty Copy Pasta:

	if (func == "spotify-this-song") {
		if (inp){
			spotThis(inp);
		} else {
			spotThis("The Sign");
		}

	} else if (func == "my-tweets") {
		console.log('On the way')

	} else if (func == "movie-this") { 
		if (inp){
		movieThis(inp);
		} else {
			movieThis('Mr. Nobody')
		}
	} else {
		console.log("Command Not Understood");
	}

	});
	// console.log(fs.readFile("yay.txt"));
} else {
	console.log("Command Not Understood");
}