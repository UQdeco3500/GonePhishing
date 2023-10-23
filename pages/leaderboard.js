
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

users.sort((a, b) => b.score - a.score)

let board = "";
users.forEach((user) => board += '<tr><td>' + '<img src="assets/profile-fish.png">' + user.uname + '</td><td>' + user.score + '</td></tr>');

document.getElementById("leaderboard").innerHTML = board;