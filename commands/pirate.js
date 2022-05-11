const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pirate')
		.setDescription('arr'),
	async execute(interaction, client) {
		await client.user.setAvatar('piratespy.jpg');
        await interaction.reply('arr');
	},
};