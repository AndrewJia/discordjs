const { SlashCommandBuilder } = require('@discordjs/builders');

const rules1 = "To begin each round, all players roll five dice. Each player looks at their own dice, hidden from the other players."
const rules2 = "The first player then states a bid consisting of a face and a quantity. For example, a player might bid five 2's."
const rules3 = "Each subsequent player can either then increase the count (six 2's), increase the face (five 3's), or they can challenge the previous bid."
const rules4 = "If the player challenges, all players reveal their dice. If the bid is matched or exceeded, the bidder wins. Otherwise the challenger wins."

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('dms the user the rules of liar\'s dice'),
	async execute(interaction) {
		await interaction.user.send(rules1);
		await interaction.user.send(rules2);
		await interaction.user.send(rules3);
		await interaction.user.send(rules4);
        await interaction.reply("done");
	},
};

