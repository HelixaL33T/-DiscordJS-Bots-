exports.run = (client, message, args) => {
    let replies = ["6 cm long", "7 cm long", "8 cm long", "9 cm long", "10 cm long", "11 cm long", "12 cm long", "13 cm long", "14 cm long", "15 cm long", "16 cm long", "17 cm long", "18 cm long", "19 cm long", "20 cm long", "21 cm long", "22 cm long", "23 cm long", "24 cm long", "25 cm long", "26 cm long", "27 cm long", "28 cm long", "29 cm long", "30 cm long", "31 cm long", "32 cm long", "33 cm long", "34 cm long", "35 cm long", "36 cm long",];
    let long = Math.floor((Math.random() * replies.length));
    message.channel.send(`> Your dick is ${replies[long]}`)
}

const Discord = require("discord.js");
const client = new Discord.Client();