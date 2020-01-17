module.exports = (client, member) => {
    let userLogs = member.guild.channels.find(c => c.name === 'leave-logs');
    userLogs.send(`${member.user.tag} has left **${member.guild}**!`)
}