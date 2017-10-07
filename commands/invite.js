exports.run = function(client, message, args) {
	message.channel.send(`${message.author} You can invite GorDanDEV into your server using this link:\n https://discordapp.com/oauth2/authorize?client_id=366148270692499458&scope=bot&permissions=8`);
	message.channel.send(":warning: The bot is currently private, but might be public soon. :wink:");
}