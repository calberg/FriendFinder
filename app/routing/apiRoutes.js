var path = require("path");

var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });
    app.post('/api/friends', function(req, res) {
        var userInput = req.body;
        var userResponses = userInput.scores;
        var matchName = '';
        var friendMatchName = '';
        var totalDifference = 1000;
        for (var i = 0; i< friendList.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friendList[i].scores[j] - userResponses[j]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friendList[i].name;
            }
        }
        res.json({status: 'OK', matchName: matchName})
    });
}

