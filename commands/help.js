const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle("__GorDanDEV Help Menu__")
	.setDescription("This is the help menu for GorDanDEV, enjoy!\n The prefix for GorDanDEV is `;;`")
	.addField("about", "Posts an embed with some information about GorDanDEV. `;;about`")
	.addField("help", "DMs you this embed. `;;help`")
	.addField("invite", "Posts an invite link to add GorDanDEV into your server. `;;invite`")
	.addField("ping", "Pings your connection to the bot. `;;ping`")
	.setColor("#add8e6")
	.setThumbnail("https://cdn.discordapp.com/avatars/366148270692499458/d0b05664d24935b1f93ec8ebe2db2535.webp?size=1024")
	message.channel.send({embed});
}