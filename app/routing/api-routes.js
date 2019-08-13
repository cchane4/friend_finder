let friends = require("../data/friends.js");

module.exports = (app) => {

    app.get("/api/friends",(req, res) => {
        res.json(friends);
    });

    app.post("/api/friends",(req, res) => {

        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        //console.log(req.body);

        let userData = req.body;
        let userScores = userData.scores;

        //console.log(userScores);

        let totalDifference = 0;

        for (let i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
           let totalDifference = 0;

            for (let j = 0; j < friends[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);

        res.json(bestMatch);

    });

};