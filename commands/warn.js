const Discord = require('discord.js');
module.exports = {
	name: 'warn', // nome per richiamare il comando
	execute(bot, message, args) {
		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Per piacere menziona chi vuoi avvisare.');
		}
		if (message.mentions.users.first().bot) {
			return message.channel.send('Che serve avvisare un bot?');
		}
		if (message.author.id === user.id) {
			return message.channel.send('Perchè ti vuoi punire da solo?');
		}
		const reason = message.content.slice(30) || ['Non definito'];

		let warningsg = bot.db
			.get(`warnings_${message.guild.id}_${user.id}`)
			.then(warnings => {
				if (warnings === null) {
					bot.db.set(`warnings_${message.guild.id}_${user.id}`, 1);
					user.send(
						`Sei stato avvisato in **${message.guild.name}** per ${reason}`
					);
					message.channel.send(
						`Hai avvisato **${
							message.mentions.users.first().username
						}** per ${reason}`
					);
				} else if (warnings !== null) {
					const newarn = warnings + 1;
					bot.db.delete(`warnings_${message.guild.id}_${user.id}`);
					bot.db.set(`warnings_${message.guild.id}_${user.id}`, newarn);
					user.send(
						`Sei stato avvisato in **${message.guild.name}** per ${reason}`
					);
					message.channel.send(
						`Hai avvisato **${
							message.mentions.users.first().username
						}** per ${reason}`
					);
				}
			});
	}
};
