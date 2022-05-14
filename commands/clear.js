const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('clears stored dice rolls'),
	async execute(interaction) {
        //total dice count
        count = [0, 0, 0, 0, 0, 0];
        for(i = 1; i < global.rolls.length; i+=2) {
            for(j = 0; j < global.rolls[i].length; j++) {
                //console.log(global.rolls[i][j]);
                count[global.rolls[i][j]-1]++;
            }
        }

        console.log(count);
        
        await interaction.reply("array was "+global.rolls);

        countString = "";
        for(val = 1; val <= 6; val++) {
            countString += (count[val-1]) + " " + val + "'s\n";
        }
        await interaction.channel.send(countString);

        //clears stored dice rolls and bet
        global.rolls = Array();
        global.betVal = 0;
        global.betCnt = 1;
	},
};