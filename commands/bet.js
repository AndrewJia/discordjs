const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bet')
		.setDescription('Place your bet about the dice')
        .addIntegerOption(option => 
            option
                .setName('value')
                .setDescription('Value of the bet')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option
                .setName('count')
                .setDescription('Count of the bet')
                .setRequired(true)
        ),
	async execute(interaction) {
        value = interaction.options.getInteger('value');
        count = interaction.options.getInteger('count');

        //check value or count out of range
        if(value < 1 || value > 6) {
            await interaction.reply("invalid value: not in range 1-6");
            return;
        }

        if(count < 1) {
            await interaction.reply("invalid count: must be greater than 0");
            return;
        }

        //check if bet is valid
        if(count < global.betCnt) {
            await interaction.reply("invalid bet: count can't decrease");
            return;
        }

        if(count == global.betCnt) {
            if(value <= global.betVal) {
                await interaction.reply("invalid bet: value must be greater if count is the same");
            } else {
                await interaction.reply("The new bet is "+count+" "+value+"'s!");
                global.betCnt = count;
                global.betVal = value;
                return;
            }
        }

	},
};
