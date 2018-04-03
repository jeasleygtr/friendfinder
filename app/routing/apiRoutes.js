// Dependencies
var path = require('path');

// Pull data 
var friendData = require('../data/friends.js')

// Exports the file paths
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res){
        var userData = req.body;

        var userScores = userData.scores;

        var matchName = '';
        var matchPicture = '';
        var matchBio = '';
        var totalDiff = 100;

        for (var i = 0; i < friendData.length; i++){

            var diff = 0;
            
            for (var j = 0; j < userScores.length; j++){
                diff += Math.abs(friendData[i].scores[j] - userScores[j]);
            }

            if(diff < totalDiff){
                totalDiff = diff;
                matchName = friendData[i].name;
                matchPicture = friendData[i].photo;
                matchBio = friendData[i].aboutme;
            }

        }
        friendData.push(userData);

        res.json({matchname: matchName, matchpicture: matchPicture, matchbio: matchBio});
    })
};