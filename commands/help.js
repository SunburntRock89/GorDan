const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle("__GorDanDEV Help Menu__")
	.setDescription("This is the help menu for GorDanDEV, enjoy!\n The prefix for GorDanDEV is `;;`")
	.addField("about", "Posts an embed with some information about GorDanDEV. `;;about`")
	.addField("avatar", "Posts an embed with your avatar. `;;avatar`")
	.addField("github", "Posts a link to the GitHub Respository for GorDanDEV. `;;github`")
	.addField("help", "DMs you this embed. `;;help`")
	.addField("invite", "Posts an invite link to add GorDanDEV into your server. `;;invite`")
	.addField("ping", "Pings your connection to the bot. `;;ping`")
	.addField("serverinfo", "Posts some basic info about the server. `;;serverinfo`")
	.setColor("#add8e6")
	.setThumbnail("https://cdn.discordapp.com/avatars/366148270692499458/d0b05664d24935b1f93ec8ebe2db2535.webp?size=1024")
	.setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
	message.channel.send({embed});
}