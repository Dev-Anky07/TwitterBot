const express = require("express");
const app = express();
const Twit = require("twit");

const config = {
    consumer_key: "JqOrGeH4zoJJkSZjYsW5pB2ms",
    consumer_secret: "pn8g1LrG0PhAkBMtg79WE4WNFPktSr9yAdGjGpR03SuPDnGkxj",
    acces_token: "Y1493189235314405377-xG05Nhr6QbH6LbbU7l0JUxN7C6OHAl",
    access_token_secret: "V7wP3FKQzHDEQ7nvzqBcidYO0WndLglrEZqoWjv1HKil6"
};

const T = new Twit(config);


T.post("statuses/update", {status: "Testing out Twitter's API, Beep Boop i'm a bot"}, function(err, data, response){
    if(err){
        console.log("Error posting tweet", err);
    } else {
        console.log("Tweet posted successfully", data.text);
    }
});


app.listen(4000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server Started Successfully.");
    }
  });
