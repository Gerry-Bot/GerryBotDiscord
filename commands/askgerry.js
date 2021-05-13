module.exports = {
	name: 'askgerry',
	execute(bot, message, args) {
		const question = args;
		if (!question.length) return message.reply('non hai inserito una domanda.');
		/*   const domanda = question.endsWith("?")
    if (domanda === false) return message.reply("quella non sembra una domanda.")*/
		const responses = [
			'Per quello che mi hai chiesto saresti da scuderia...',
			'PIEROOOHHH VIENILO A PRENDEREEEHHH',
			'Si',
			'No',
			'https://cdn.discordapp.com/attachments/758012100496064592/769213195347820585/IMG_4298.mp4',
			'Non saprei',
			'Ma va... ma non è vero...'
		];
		message.channel.send(
			responses[Math.floor(Math.random() * responses.length)]
		);
	}
};
