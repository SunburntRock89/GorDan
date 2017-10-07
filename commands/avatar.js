const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle(`__Avatar for ${message.author.tag}__`)
	.setImage(message.author.avatarURL)
	.setColor("#ff0000")
	.setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
	message.channel.send({embed});
}