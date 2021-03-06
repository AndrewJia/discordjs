//npm install @discordjs/builders @discordjs/rest discord-api-types
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
//const { clientId, guildId, token } = require('./config.json');
const dotenv = require('dotenv');
dotenv.config();
const clientId = process.env.CLIENTID;
const guildId = process.env.GUILDID;
const token = process.env.TOKEN;

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);