const { SlashCommandBuilder } = require('@discordjs/builders');
const NepaliDate = require('nepali-date-converter');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('date')
		.setDescription('Replies with Date!'),
	async execute(interaction) {
		//return interaction.reply('Pong!');
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        let neptoday = new NepaliDate();
        neptoday.format('To\\day is ddd DD, MMMM YYYY').String;
        // let neptoday = new NepaliDate(2054, 5, 24)
        console.log(neptoday.format('To\\day is ddd DD, MMMM YYYY'));

        return interaction.reply('English Date: ' + mm + '/' + dd + '/' + yyyy+'\n'+'Nepali Date: '+ neptoday.format('To\\day is ddd DD, MMMM YYYY'));
	},
};
