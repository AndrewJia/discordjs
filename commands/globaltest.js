const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('globaltest')
		.setDescription('logs global array'),
	async execute(interaction) {
        //global.lul.push(2);
        console.log(global.lul);
		//console.log(global.lul.toString());
        await interaction.reply("done");
	},
};