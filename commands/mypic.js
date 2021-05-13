const Discord = require("discord.js")
module.exports =  {
	name: 'mypic', // nome per richiamare il comando
	execute (bot, message, args) {
		const embed = new Discord.MessageEmbed()
        .setColor('#1bbf47')
        .setTitle('Foto profilo generata')
        .setDescription('Questa è la tua foto profilo')
        .setImage(message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)

      
	},
};
