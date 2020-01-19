exports.run = (client, message, args) => {
    let replies = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",];
    let result = Math.floor((Math.random() * replies.length));
    let rnumberEmbed = new Discord.RichEmbed()
    .setTitle("Lucky Number")
    .setColor("#778899")
    .addField(":game_die: Your lucky number is", replies[result])
    .setFooter("MEE6 Premium © All Rights Reserved", "http://oi68.tinypic.com/nqr7n9.jpg")
    message.channel.send(rnumberEmbed);
}

const Discord = require("discord.js");
const client = new Discord.Client();