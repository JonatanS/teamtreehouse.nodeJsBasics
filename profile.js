
var https = require('https');
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badges and " + points + " points in JavaScript";
  console.log(message);
}

function printError(error) {
  console.error(error.message); 
}

function get(username) {
    //Connect to the API URL https://teamtreehouse.com/jonatanschumacher.json
    var request = https.get('https://teamtreehouse.com/' + username + '.json', function(response){
       //console.dir(response);
      console.log(response.statusCode);
      if(response.statusCode === 200) {
        console.log("Cheers");
      }
      
    //Read the data
      //found here: https://nodejs.org/api/stream.html#stream_api_for_stream_consumers
      
      var body = '';
      
      response.on('data', function (chunk) {
        body += chunk;
        console.log('reading...');
      });
      
      response.on('end', function() {
        //console.log(body);
        try {
          
          //Parse the data
          var profile = JSON.parse(body);
          console.log("DONE!\nit's a long " + typeof(body));
          
          //Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch (er) {
          printError({message: "There was an error getting the profile for " + username + "."});
        } 
      });
    });

  //Connection Error:
  request.on("error", printError);
}

module.exports.get = get;
           