const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('clears stored dice rolls'),
	async execute(interaction) {
        global.lul = Array();
        await interaction.reply("done");
	},
};