

var friends = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        //Logic to compare user survey answers to existing friends options
        var userScores = req.body.scores;
        var bestMatch = {
            leastDif: 100,
            friend: {}
        }

        for (var i=0; i<friends.length; i++){

            var totalDif = 0; 
            for(var j=0; j<9; j++) {
                var scoreDif = Math.abs(userScores[j] - friends[i].scores[j]);
                totalDif += scoreDif;
            }
            
            if(totalDif < bestMatch.leastDif) {
                bestMatch.friend = friends[i];
                bestMatch.leastDif = totalDif;
            }
        }

        friends.push(req.body);
        res.json(bestMatch);
    });
}