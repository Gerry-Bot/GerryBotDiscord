const Discord = require("discord.js")
module.exports = {
name: "ban",
	description: "Banna qualcuno.",
	args: true,
  guildOnly: true,
	usage: "<persona da bannare> <motivo>",
	cooldown: 2,
  permissions: "BAN_MEMBERS",
	execute (bot, message, args) {

        
            if (!message.guild) return;
            const user = message.mentions.users.first();
            if (user) {
            const member = message.guild.member(user);
            if (member) {
             
                member.ban(`${user.username}#${user.discriminator} è stato mandato in scuderia da ${message.author.username}#${message.author.discriminator}`)
            .then(() => {
            message.channel.send(`:white_check_mark: ${user.username}#${user.discriminator} è stato mandato in scuderia (bannato) con successo.`);
            })
                  .catch(err => {
                    message.channel.send(`:x: Non sono riuscito a mandare in scuderia questo membro.`);
                    console.error(err);
                  });
                  
            
              }
            else {
                message.channel.send(':x: L\'utente menzionato non è in questo server.');
              }
            }
            else {
              message.channel.send(':x: Non hai menzionato nessuno da bannare.');
            }  
	},
};
