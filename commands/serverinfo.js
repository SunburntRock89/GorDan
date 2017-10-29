const Discord = new require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle(`__Server Info for ${message.guild.name}__`)
	.addField("Name", message.guild.name, true)
	.addField("ID", message.guild.id, true)
	.addField("Location", message.guild.region, true)
	.addField("Owner", message.guild.owner.user.username, true)
	.addField("Owner ID", message.guild.ownerID, true)
	.addField("Default Channel", message.guild.defaultChannel, true)
	.addField("Member Count", message.guild.memberCount, true)
	.addField("Created At", message.guild.createdAt, true)
	.setThumbnail(message.guild.iconURL, true)
	.setColor(message.guild.owner.colorRole.color, true)
	.setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
	message.channel.send({embed});
}