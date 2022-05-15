const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('clears stored dice rolls'),

	async execute(interaction) {
        await interaction.reply("cleared all dice rolls");

        //clears stored dice rolls and bet
        global.rolls = Array();
        global.betVal = 0;
        global.betCnt = 1;
	},
};