const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("> :underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
  }
};