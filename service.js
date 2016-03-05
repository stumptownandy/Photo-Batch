var app = angular.module("github-api");
app.service('githubService', function($http) {


var id = "myCLientID";
var sec = "mySecretKeyThing";
var param = "?=3257a93c96b37cf80ae9" + id + "&=45becb1dda65f5af435cb81048b8791bd02440f9" + sec;
var user ="username";
this.getUser = function(username) {
    
    return $http({ 
        method: 'GET', 
        url: 'https://api.github.com/users/'+ username
       });
    }
});



var express = require('express')
var app = express ();

app.get('/'), function(request, response){
    response.send('you should go here:'
        +' <a href="/api/starwars"> Click here to see star wars</a>'         
})
    app.post('/api/starwars', function(req,res){
        LastPostToStarWars = req.body.provoMessage
        res.send ("Post Successful");
    })
    
    app.listen('3000')