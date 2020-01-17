const { Client } = require('discord.js');
const fs = require('fs')
const Enmap = require('enmap');
require('dotenv-flow').config();

const client = new Client();

client.commands = new Enmap();

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        const evtName = file.split('.')[0];
        console.log(`[ Helixa ] Loaded event '${evtName}'`)
        client.on(evtName, evt.bind(null, client));
  });
});

fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error
    files.forEach(file => { 
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`)
        let cmdName = file.split('.')[0];
        console.log(`[ Helixa ] Loaded commands '${cmdName}`);
        client.commands.set(cmdName, props);
  });
});

client.login("NjY3NDA3NTM4Mjk1MTQ0NDc1.XiCRug.54SnUpVLNSUdB_Z5MS0aERg0K5M")