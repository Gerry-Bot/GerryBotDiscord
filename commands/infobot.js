const Discord = require("discord.js")
module.exports =  {
	name: 'infobot', // nome per richiamare il comando
	execute (bot, message, args) {
const noIntroEmbed = new Discord.MessageEmbed()
  .setColor('#04b8e0')
  .setTitle('Informazioni sul bot')
  .setDescription("Hai qualche novità o funzione che vuoi che venga aggiunta sul bot? Entra nel server discord di supporto https://bgamermanu.cf/gerryinvite \n\n**Creazione del bot** Creazione del bot \n**Idea di** BGamerManu creata **con l'aiuto** di ParliamoDiPC. \n**Supporters**: ParliamoDiPC, AleDuck, BombyX113 \n\n**GerryBot Version** v1.7.1 \n**GerryBot Beta Version** b1.7.1")
  .setFooter('Comando usato da ' + message.author.tag);
  message.channel.send(noIntroEmbed)

  	},
};
