const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dmtest')
		.setDescription('dms the user'),
	async execute(interaction) {
		await interaction.user.send("yo");
        await interaction.user.send(global.lul.toString());
        await interaction.reply("done");
	},
};