const Discord = require("discord.js");
const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "commands",
            aliases: ["cmds", "help"]
        });
    }

    execute(message) {
        const prefix = this.client.config.prefix;
        message.reply('Check your DMs. :wink:');
		
let botembed = new Discord.RichEmbed()
    .setTitle(`Giveaway Commands`)
    .addField("Default Prefix", "g!")
    .addBlankField()
    .addField("-= **Giveaway Commands** =-", "Commands that can be used only from the administrators for giveaways!")
    .addField("**create**", "Create a giveaway")
    .addField("**delete**", "Delete the previous giveaway")
    .addField("**draw**", "Force a draw")
    .addField("**redraw**", "Redraw a winner")
    .addField("**ping**", "Check to see if the bot responds")
    .setColor('RANDOM');
    message.author.send(botembed);
	
    }
};