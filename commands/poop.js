const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poop')
		.setDescription('Become doo doo'),
		
	async execute(interaction, client) {
		await client.user.setAvatar('https://media.istockphoto.com/vectors/emoji-poop-face-cute-emoticon-flat-smile-vector-illustration-vector-id1016777030?s=612x612');
        await interaction.reply('poopoo mode');
	},
};