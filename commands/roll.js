const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls Dice')
        .addIntegerOption(option => 
            option
                .setName('amount')
                .setDescription('The Amount of Dice to Roll')
        )
        .addBooleanOption(option =>
            option
                .setName('joingame')
                .setDescription('Join liar\'s dice game?')),
	async execute(interaction) {

        // rolls given number of dice or default = 5
        amount = interaction.options.getInteger('amount');
        if(amount == null) {
            amount = 5;
        }

        // array to store the rolls
        const arr = Array();
        for(i = 0; i < amount; i++) {
            arr.push(getRandomInt(6))
        }
        arr.sort();

        //stores username and rolls
        global.rolls.push(interaction.user.tag);
        global.rolls.push(arr);

        await interaction.user.send("Rolling "+amount+" dice\n"+arr.toString());
        await interaction.reply("done");
	},
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}