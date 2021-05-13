const Discord = require("discord.js")

module.exports = {
    name: "random",
    description: "Una clip di Gerry random",
    execute(bot, message, args) {
        const clips = require("../clips.json")
		const clip_url = clips.all[Math.floor(Math.random() * clips.all.length)]
        const clip = new Discord.MessageAttachment(clip_url)
        message.channel.send(clip)
    },
}
