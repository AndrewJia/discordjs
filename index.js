// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Ping pong on message
client.on("message", msg => {
    if (msg.content === "ping") {
        console.log('pong');
        msg.reply("pong");
    }
});


// Login to Discord with your client's token
client.login(token);