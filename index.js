/**
 * Gerry Bot
 * Repl.it hosting
 * Hosting by ParliamoDiPC. Bot by BGamerManu
 */
// Coso per mantenere il bot online
const http = require('http');
const server = http.createServer((req, res) => {
	res.writeHead(200);
	res.end('ok');
});
server.listen(3000);
const fs = require('fs');
const Discord = require('discord.js');
require('dotenv').config(); // robe marse
const bot = new Discord.Client({
	disableMentions: 'everyone'
});
const Database = require('@replit/database');
const db = new Database();
bot.commands = new Discord.Collection();
bot.db = db;
const chalk = require('chalk');
const prefix = process.env.PREFIX;
const env = process.env;
const autorizzati = [
	'138029731655188480',
	//BGamerManu
	'498434550347726850',
	//BombyX113
	'723086691266461737'
	// ParliamoDiPC
	//inserire id di una persona da autorizzare a piacimento, per tenere ordine dopo metti anche il suo nome cosi ti ricordi
];


const commandFiles = fs
	.readdirSync('./commands')
	.filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	bot.commands.set(command.name, command);
	console.log(
		chalk.bold.green('✔ ') + command.name + ' impostato con successo!'
	);
}
// Messaggio di avvio
bot.on('ready', () => {
	console.log('Bot online');

	// Rich presence
	bot.user.setActivity(
		"GerryBot v1.7.0 - usa gs.help per una lista di comandi completa",
		{ type: 'PLAYING', url: 'https://twitch.tv/bgamermanu' }
	);
});

// Zona comandi
bot.on('message', message => {
	const msg = message.content.trim().toLowerCase();
	if (message.author.bot)
		return; /* I messaggi inviati da bot(ti) non vengono letti */
	const args = message.content
		.slice(3)
		.trim()
		.split(/ +/);
	const command = args.shift().toLowerCase();
let autorespond = bot.db.get(`autorisposta_${message.guild.id}`)
if (autorespond === null) {
	if (message.content.endsWith('.')) {
		if (message.content.endsWith('...')) return;
		message.channel.send('PUNTO.');
	} /* Per questo ho messo il message.author.bot return */
	if (msg.includes('marso')) message.channel.send('COME IL PIXEL 4');
	if (message.content.includes('$testAutoRisposta')) message.channel.send('Le autorisposte sono abilitate.');
	if (msg.includes('marsa')) message.channel.send('COME MARISA BELARDA');
	if (msg.includes('marse'))
		message.channel.send('COME LE FOLLOWER DI MARISA BELARDA');
	if (msg.includes('marsi'))
		message.channel.send('COME I FONDATORI DI ORDISSIMO');
	if (msg.includes('marsume'))
		message.channel.send('Hai nominato il Le Numēro 1 Mini?');
		
}
	if (message.content.endsWith('.')) {
		if (message.content.endsWith('...')) return;
		message.channel.send('PUNTO.');
	} /* Per questo ho messo il message.author.bot return */
	if (msg.includes('marso')) message.channel.send('COME IL PIXEL 4');
	if (message.content.includes('$testAutoRisposta')) message.channel.send('COME IL PIXEL 4');
	if (msg.includes('marsa')) message.channel.send('COME MARISA BELARDA');
	if (msg.includes('marse'))
		message.channel.send('COME LE FOLLOWER DI MARISA BELARDA');
	if (msg.includes('marsi'))
		message.channel.send('COME I FONDATORI DI ORDISSIMO');
	if (msg.includes('marsume'))
		message.channel.send('Hai nominato il Le Numēro 1 Mini?');
	if (msg.includes('the wall'))
		message.channel.send(
			'https://cdn.discordapp.com/attachments/758012100496064592/765915122752421969/video0.mp4'
		);
	if (msg.includes('hey gerry, mostrami un oggetto da scuderia'))
		message.channel.send(
			'https://cdn.discordapp.com/attachments/758012100496064592/777590488248746024/video_2020-11-15_18-46-41.mp4'
		);
	if (msg.includes('pieroohh'))
		message.channel.send(
			'https://cdn.discordapp.com/attachments/758012100496064592/777591354150748210/PIEROOOOOOO.mp4'
		);
if (!message.content.toLowerCase().startsWith("gs.")) return;
	if (message.content === 'gs.petardi') {
		return message.channel.send(
			'PETARDIHHH \n https://cdn.discordapp.com/attachments/758012100496064592/765209747023855626/IMG_3203.mp4'
		);
	}
	if (message.content === 'gs.aaapunto') {
		return message.channel.send(
			'AAAAAAAAApunto \nhttps://cdn.discordapp.com/attachments/758012100496064592/758046211872915476/AAA_APPUNTO.mp4'
		);
	}
	if (message.content === 'gs.sciopone') {
		return message.channel.send(
			'SCIOPONE \nhttps://cdn.discordapp.com/attachments/758012100496064592/764461579722686474/video_2020-10-10_14-17-09.mp4'
		);
	}
	if (message.content === 'gs.mannaggia') {
		return message.channel.send(
			'Mannaggia la p... \nhttps://cdn.discordapp.com/attachments/758012100496064592/765228630292824064/MANNAGGIA_LA_porca_vacca_porca_pu_porca_miseria_SPACCA_TUTTO.mp4'
		);
	}
	if (message.content === 'gs.calma') {
		return message.channel.send(
			'Con calma \nhttps://cdn.discordapp.com/attachments/758012100496064592/765278084118609972/CON_CALMA_EH.mp4'
		);
	}
	if (message.content === 'gs.zitti') {
		message.channel.send(
			'Zitti \nhttps://cdn.discordapp.com/attachments/758012100496064592/765278189547028500/ZITTI_PERCHe_e_UN_MOMENTO_CREATIVO.mp4'
		);
	}
	if (message.content === 'gs.mostro') {
		message.channel.send(
			'MOSTRO \nhttps://cdn.discordapp.com/attachments/758012100496064592/765551520321634304/video_2020-10-13_14-28-07.mp4'
		);
	}
	if (message.content === 'gs.thewall') {
		message.channel.send(
			'THE WALLLLLLLLLL \nhttps://cdn.discordapp.com/attachments/758012100496064592/765915122752421969/video0.mp4'
		);
	}
	if (message.content === 'gs.allora') {
		message.channel.send(
			'E ALLORAAAA \nhttps://cdn.discordapp.com/attachments/758012100496064592/765551654543556618/video_2020-10-13_14-28-04.mp4'
		);
	}
	if (message.content === 'gs.help') {
		const Embed = new Discord.MessageEmbed()
			.setColor('#cf9b23')
			.setAuthor(
				'Gerry Bot',
				'https://cdn.discordapp.com/attachments/758012100496064592/767754030499364884/88db0f8f6cf5845e4ad2d60b95efd831.png'
			)
			.setTitle('Comandi nel bot')
			.setDescription(
				'petardi  \nvabene \nsciopone \nmannaggia \ncalma \nzitti \nthewall \nallora \nbella \ndica \nokay \ncaschi \nvale \npetardi2 \nmypic \ninfobot \nban \nwarn \n\nTUTTI I COMANDI DEVONO ESSERE PRECEDUTI DA gs.'
			)
			.setFooter(
				'Creato da BGamerManu',
				'https://cdn.discordapp.com/attachments/758012100496064592/765283228348579840/photo_2020-10-09_22-27-17.jpg'
			);
		message.channel.send(Embed);
	}
	if (message.content === 'gs.bella') {
		message.channel.send(
			'https://cdn.discordapp.com/attachments/758012100496064592/767104943257288744/video_2020-10-17_21-20-28.mp4'
		);
	}
	if (message.content === 'gs.dica') {
		message.channel.send(
			'https://cdn.discordapp.com/attachments/758012100496064592/767105367762796604/video_2020-10-17_21-20-04.mp4'
		);
	}
	if (message.content === 'gs.okay') {
		message.channel.send(
			'https://cdn.discordapp.com/attachments/758012100496064592/767105636004790292/OKEY.mp4'
		);
	}
	if (message.content === 'gs.caschi') {
		message.channel.send(
			'Caschi male frate https://cdn.discordapp.com/attachments/758012100496064592/768171308881936424/AHAH_CASCHI_MALE_peggio_per_te.mp4'
		);
	}
	if (message.content === 'gs.vale') {
		message.channel.send(
			'VALES https://cdn.discordapp.com/attachments/758012100496064592/768171370651451392/ANCHE_PER_ME_VALE.mp4'
		);
	}
	if (message.content === 'gs.idle') {
		if (!autorizzati.includes(message.author.id))
			return message.channel.send('SCIOPA, NON È ATTIVO PER TE IL COMANDO');
		bot.user.setStatus('idle').then(() => {
			console.warn(
				`${message.author.username} ha impostato il mio status su 'IDLE'`
			);
			return message.channel.send('Idle Impostato con successo!');
		});
	}
	if (message.content === 'gs.dnd') {
		if (!autorizzati.includes(message.author.id))
			return message.channel.send('SCIOPA, NON È ATTIVO PER TE IL COMANDO');
		bot.user.setStatus('dnd').then(() => {
			console.warn(
				`${
					message.author.username
				} ha impostato il mio status su 'DO NOT DISTURB'`
			);
			return message.channel.send('Do not disturb Impostato con successo!');
		});
	}
	if (message.content === 'gs.online') {
		if (!autorizzati.includes(message.author.id))
			return message.channel.send('SCIOPA, NON È ATTIVO PER TE IL COMANDO');
		bot.user.setStatus('online').then(() => {
			console.warn(
				`${message.author.username} ha impostato il mio status su 'ONLINE'`
			);
			return message.channel.send('Online impostato con successo!');
		});
	}
	if (message.content === 'gs.offline') {
		if (!autorizzati.includes(message.author.id))
			return message.channel.send('SCIOPA, NON È ATTIVO PER TE IL COMANDO');
		bot.user.setStatus('invisible').then(() => {
			console.warn(
				`${
					message.author.username
				} ha impostato il mio status su 'INVISIBILE / OFFLINE'`
			);
			return message.channel.send(
				'Sono diventato invisibile - Risulterò offline per gli altri'
			);
		});
	}
	if (message.content === 'gs.petardi2') {
		message.channel.send(
			'OCCHIO EH https://cdn.discordapp.com/attachments/758012100496064592/769213195347820585/IMG_4298.mp4'
		);
	}
	if (!bot.commands.has(command)) return;

	try {
		bot.commands.get(command).execute(bot, message, args);
	} catch (error) {
		console.error(error);
	}
});
bot.login(); // eh volevi il token
