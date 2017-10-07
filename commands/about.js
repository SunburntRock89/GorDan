const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle("__About GorDanDEV__")
	.setDescription("GorDanDEV is a simple discord.js Discord Bot by Dan.#2518, and is still in development.")
	.setThumbnail("https://cdn.discordapp.com/avatars/366148270692499458/d0b05664d24935b1f93ec8ebe2db2535.webp?size=1024")
	.setColor("#ffa500")
	.setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
	message.channel.send({embed});
}