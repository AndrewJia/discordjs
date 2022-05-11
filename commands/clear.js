const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('clears stored dice rolls'),
	async execute(interaction) {
        //total dice count
        count = [0, 0, 0, 0, 0, 0];
        for(i = 1; i < global.lul.length; i+=2) {
            for(j = 0; j < global.lul[i].length; j++) {
                console.log(global.lul[i][j]);
                count[global.lul[i][j]-1]++;
            }
        }

        console.log(count);
        await interaction.reply("array was "+global.lul+"\ntotal dice counts "+count);
        //await interaction.channel.send(count);
        global.lul = Array();
	},
};