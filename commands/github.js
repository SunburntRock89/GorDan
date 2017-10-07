const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle("__GorDanDEV Code__")
	.setDescription("GorDanDEV is open source! Find the source code over at\n https://github.com/StupidDan/GorDan")
	.setThumbnail("https://assets-cdn.github.com/images/modules/logos_page/Octocat.png")
	.setColor("#ffa500")
	.setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
	message.channel.send({embed});
}