const Discord = require("discord.js");
const client = new Discord.Client();
const configure = require('./configure.json');

var logToken = "Your discord token"
var prefix = "Your Prefix";


// Says in the terminal when the bot is online!
console.log("The Bot is running!");

// Logs in channel when the bot is online! ( Edit the channel id in **configure.json** ) Do no touch *UseEmbeds*!

client.once("ready", async () => {
    if (configure.useEmbeds) {
    const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} / Bot Logs`, client.user.avatarURL)
    .setColor("RANDOM")
    .setDescription(":white_check_mark: **Started succesfully**")
    client.channels.get(configure.logChannel).send(embed)
 } else {
     client.channels.get(configure.logChannel).send(":white_check_mark: **Started Succesfully**")
 }
});

// Fetch Commands

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  }
})

client.login(logToken); // Do not touch !