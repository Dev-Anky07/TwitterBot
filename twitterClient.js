const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi ({
    appkey: "JqOrGeH4zoJJkSZjYsW5pB2ms",
    appSecret:"pn8g1LrG0PhAkBMtg79WE4WNFPktSr9yAdGjGpR03SuPDnGkxj",
    accessToken:"1493189235314405377-xG05Nhr6QbH6LbbU7l0JUxN7C6OHAl",
    accesssecret: "V7wP3FKQzHDEQ7nvzqBcidYO0WndLglrEZqoWjv1HKil6"
  })  

const rwcLient = client.readwrite

 module.exports = rwcLient