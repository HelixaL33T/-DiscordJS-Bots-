const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setTitle("Your Name | Help")
    .addBlankField()
    .addField("-= **NSFW Commands** =-", "Commands that can be used by everyone but in nsfw channel!")
    .addField("**4k**", "Sends to nsfw channel 4K nsfw image")
    .addField("**anal**", "Sends to nsfw channel ANAL image")
    .addField("**ass**", "Sends to nsfw channel ASS image")
    .addField("**gif**", "Sends to nsfw channel GIF image")
    .addField("**hentai**", "Sends to nsfw channel HENTAI image")
    .addField("**holo**", "Sends to nsfw channel HOLO image")
    .addField("**lewd**", "Sends to nsfw channel LEWD image")
    .addField("**pussy**", "Sends to nsfw channel PUSSY image")
    .addField("**thigh**", "Sends to nsfw channel THIGH image")
    .addField("-= **Member commands** =-", "Commands that can be executed from everyone!")
    .addField("**dicksize**", "Sends in our server how long is your dick!")
    .addField("**rnumber**", "Sends a random number")
	.addField("**iq**", "Shows how is your IQ")
	.addField("**gayrate**", "Shows how percent you are gay")
	.addField("**pepe**", "Shows you a pepe!")
    .setColor('RANDOM');
    message.author.send(botembed);

    let avatar = bot.user.displayAvatarURL;
    let sent = new Discord.RichEmbed()
    .setThumbnail(avatar)
    .setTitle("Your Name | Help")
    .addBlankField()
    .addField("-= **Bot commands!** =-", "Message delivered to you!")
    .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
    .setColor('RANDOM');

    message.channel.send(sent);
}