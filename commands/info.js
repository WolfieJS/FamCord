const Discord = require('discord.js');
exports.run = (client, message, args, level) => {// eslint-disable-line no-unused-vars
  message.delete();
  const embed = new Discord.RichEmbed()
  .setAuthor('ServerInfo', 'https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png')
  .setColor('RANDOM')
  .addField(`Guilds`, `I Am In ${client.guilds.size} guilds`, true)
  .addField(`Total Users`, `${client.guilds.reduce((p, c) => p + c.memberCount, 0)} Users`, true)
  .addField('My Owner', `<@PUTYOURIDHERE>`, true)
  .addField('Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField('Uptime', `${require('ms')(client.uptime, {long:true})}`, true)
  .addField('Library', '[Discord.js](https://discord.js.org/#/)', true)
  .setTimestamp()
  .setFooter('This bot is Cool!')
  .setThumbnail(message.guild.iconURL)
  message.channel.send({embed}).catch(e => console.error(e));
};

exports.conf = {
  hidden: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Displays server information & statistics.',
  usage: 'info',
  category: 'General',
  extended: 'This command will return an organised embed with server information and statistics.'
};
