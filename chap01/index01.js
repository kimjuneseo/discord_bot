// discord.js
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { token } = require(__dirname +  '/../config.json');
// ready event
client.once('ready', () => {
    console.log('Ready!');
});

// message event
client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('pong');
    }
});

client.login(token);
