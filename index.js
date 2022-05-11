//npm install discord.js
//npm install dotenv
//to run: node index.js

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.DISCORD_TOKEN);
const token = process.env.TOKEN;
//const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'poop') {
		await client.user.setAvatar('https://media.istockphoto.com/vectors/emoji-poop-face-cute-emoticon-flat-smile-vector-illustration-vector-id1016777030?s=612x612');
	} else if (commandName === 'bepis') {
		await client.user.setAvatar('bepis.jpg');
	}
});

// Login to Discord with your client's token
client.login(token);