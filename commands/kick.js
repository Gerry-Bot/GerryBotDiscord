const Discord = require("discord.js")
module.exports = {
name: "kick",
	description: "Kicka qualcuno.",
	args: true,
  guildOnly: true,
	usage: "<persona da kickare> <motivo>",
	cooldown: 2,
  permissions: "KICK_MEMBERS",
	execute (bot, message, args) {

        
            if (!message.guild) return;
            const user = message.mentions.users.first();
            if (user) {
            const member = message.guild.member(user);
            if (member) {
             
                member.kick(`${user.username}#${user.discriminator} è stato mandato a fare i casting per la scuderia (kick) da ${message.author.username}#${message.author.discriminator}`)
            .then(() => {
            message.channel.send(`:white_check_mark: ${user.username}#${user.discriminator} è stato mandato a fare i casting per la Scuderia con successo. (kick)`);
            })
                  .catch(err => {
                    message.channel.send(`:x: Non sono riuscito a mandare questo membro a fare i provini per la scuderia. (Kick non riuscito)`);
                    console.error(err);
                  });
                  
            
              }
            else {
                message.channel.send(':x: L\'utente menzionato non è in questo server.');
              }
            }
            else {
              message.channel.send(':x: Non hai menzionato nessuno da mandare per i casting per la Scuderia (kick non riuscito)');
            }  
	},
};
