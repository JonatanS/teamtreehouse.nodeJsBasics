//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use node.js to connect Treehouse API to retreive the info: 

var profile = require('./profile.js');
//profile.get('jonatanschumacher');

/* //same as 
users.forEach(user) {
  profile.get(user);
} */
var users = ["chalkers", "jonatanschumacher"];
users.forEach(profile.get); 



