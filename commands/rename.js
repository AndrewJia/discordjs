const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rename')
		.setDescription('renames the bot')
        .addStringOption(option => 
            option
                .setName('name')
                .setDescription('new name of the bot')
                .setRequired(true)
        ),
	async execute(interaction, client) {
        newname = interaction.options.getString('name');
        await client.user.setUsername(newname);
		await interaction.reply(`ok `+newname);
	},
};