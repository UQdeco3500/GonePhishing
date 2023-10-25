// holds content to use for the usernames and scores
const users = [
    {
        uname: "sophie123",
        score: 130
    },

    {
        uname: "sidd",
        score: 150
    },


    {
        uname: "luke420",
        score: 125
    },


    {
        uname: "h4yd3n",
        score: 145
    },


    {
        uname: "georgie00",
        score: 120
    }

]

//sorts the users based on their score
users.sort((a, b) => b.score - a.score)

//displays the users and their scores on a leaderboard
let board = "";
users.forEach((user) => board += '<tr><td>' + '<img src="assets/profile-fish.png">' + user.uname + '</td><td>' + user.score + '</td></tr>');
//gets the board
document.getElementById("leaderboard").innerHTML = board;