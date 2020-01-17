const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = async(client, message, args) => {
    
    await message.delete().catch(O_o=>{});

    const a = message.guild.roles.get('667413453224280075');

    const filter = (reaction, user) => ['🇦'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new RichEmbed()
    .setTitle('Helixa | Verification')
    .setDescription(`
    
    🇦 ${a.toString()}
    
    `)
    .setColor("RANDOM")
    .setFooter(`ID: ${message.author.id}`);

       message.channel.send(embed).then(async msg => {

        await msg.react('🇦');

        msg.awaitReactions(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        }).then(collected => {

            const reaction = collected.first();
            
            switch (reaction.emoji.name) {
                case '🇦':
                  if (message.member.roles.has(a.id)) {
                      msg.delete(2000);
                      return message.channel.send('> **You are already verified**!').then(m => m.delete(3000));
                  }
                  message.member.addRole(a).catch(err => {
                      console.log(err);
                      return message.channel.send(`> **Error verifying you**!\n > **Reason:** *${err.message}*!`);
                  });
                  message.channel.send('> :chains: **You have been successfully verified, now you have access to all channels**!').then(m => m.delete(3000));
                  msg.delete();
                  break;
            }
        }).catch(collected => {
            return message.channel.send('> **I cannot verify you**!');
        });

    });

};

       exports.help = {
           name: 'verify'
       };