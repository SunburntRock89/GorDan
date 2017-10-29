const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

client.on('guildMemberAdd', member => {
	const embed = new Discord.RichEmbed();
	const channel = member.guild.channels.find('name', 'general');
	if(!channel) return;
	embed.setTitle("New member! 👋")
	.setDescription(`Welcome ${member}, have a good time! :smile:`)
	.setColor("#551a8b")
	channel.send({embed});
})

client.on('guildMemberRemove', member => {
	const embed = new Discord.RichEmbed();
	const channel = member.guild.channels.find('name', 'general');
	if(!channel) return;
	embed.setTitle("Member left. 😔")
	.setDescription(`${member} has left the server!`)
	.setColor("#551a8b")
	channel.send({embed});
})

client.login(settings.token);