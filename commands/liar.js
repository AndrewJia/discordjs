const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('liar')
		.setDescription('call the last player a liar!'),
        
	async execute(interaction) {
        //total dice count
        count = [0, 0, 0, 0, 0, 0];
        for(i = 1; i < global.rolls.length; i+=2) {
            for(j = 0; j < global.rolls[i].length; j++) {
                count[global.rolls[i][j]-1]++;
            }
        }
        
        countString = "";
        for(val = 1; val <= 6; val++) {
            countString += (count[val-1]) + " " + val + "'s\n";
        }

        await interaction.channel.send("array was "+global.rolls);
        await interaction.channel.send(countString);

        if(count[global.betVal-1] < global.betCnt) {
            await interaction.reply("the last bet was a lie!");
        } else {
            await interaction.reply("the last bet was not a lie!")
        }

        //clears stored dice rolls and bet
        global.rolls = Array();
        global.betVal = 0;
        global.betCnt = 1;
	},
};