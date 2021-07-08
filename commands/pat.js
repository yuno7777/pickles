const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them :3");
    if (message.mentions.users.first().id === client.user.id) return message.channel.send('<a:yayyy:862475130395557920>');
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('I see you\'re lonely,.. ***headpats you***');
    const { body } = await superagent
    .get("https://nekos.life/api/pat");

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`OwO ${message.mentions.users.first().username}, you got a head pat from ${message.author.username}!`)
    .setImage(body.url) 
    .setFooter(`© Pickles | Pat`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'pat',
    description: 'Pats someone OwO',
    category: "Action",
    usage: 'pat'
  };