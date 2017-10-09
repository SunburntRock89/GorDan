const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed1 = new Discord.RichEmbed();
	const embed2 = new Discord.RichEmbed();
	let reason = message.content.split(/\s+/g).slice(2).join(" ");

	if(message.mentions.users.size == 0) {
		message.channel.send(`**${message.author} You need to mention a user! 😧**`).catch(console.error);
		return;
	}
	if(message.mentions.users.size > 1) {
		message.channel.send(`**${message.author} You can only mention one person! :frowning:**`).catch(console.error);
		return;
	}
	if(reason.length == 0) {
		message.channel.send(`**${message.author} You need to include a reason next time! :facepalm:**`).catch(console.error);
		return;
	}
	if(!(message.member.hasPermissions("KICK_MEMBERS"))) return message.channel.send(`**${message.author} :raised_hand: You don't have permissions to use this command!**`);
	message.mentions.members.first().kick(reason);
	embed1.setTitle("__User Kicked!__")
	.setDescription(`${message.mentions.members.first()} has been kicked!\n Reason: ${reason} :hammer:`)
	.setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
	.setColor("#ffa500")
	message.channel.send({embed: embed1});

	embed2.setTitle("__You've been kicked!__")
	.setDescription(`It looks like you've been kicked on ${message.guild.name} by ${message.author}!\n Reason: ${reason} :hammer:`)
	.setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
	.setColor("#ffa500")
	message.mentions.members.first().send({embed: embed2});
}