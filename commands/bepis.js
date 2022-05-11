const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bepis')
		.setDescription('Bepis mode!'),
	async execute(interaction) {
		await client.user.setAvatar('bepis.jpg');
        await interaction.reply('bepis time');
	},
};