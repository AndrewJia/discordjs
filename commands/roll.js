const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls Dice')
        .addIntegerOption(option => 
            option
                .setName('amount')
                .setDescription('The Amount of Dice to Roll')
        ),
	async execute(interaction) {
        amount = interaction.options.getInteger('amount');
        if(amount == null) {
            amount = 5;
        }
		await interaction.user.send("Rolling "+amount+" dice");
        const arr = Array();
        for(i = 0; i < amount; i++) {
            arr.push(getRandomInt(6))
        }
        arr.sort();
        await interaction.user.send(arr.toString());
        await interaction.reply("done");
	},
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}