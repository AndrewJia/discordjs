const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dmtest')
		.setDescription('dms the user'),
	async execute(interaction) {
		await interaction.user.send("yo");
		await interaction.channel.send("omg second message");
        await interaction.reply("done");
	},
};