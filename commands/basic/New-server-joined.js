const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("guildCreate", joined =>{
    const embed = new Discord.MessageEmbed()
    embed.title("Hi👋")
    embed.description("Thanks for inviteing me!")
    embed.addField("Hi there, thanks for invting me to you server. For my list of commands you can run:", `${prefix}help.`)
    embed.color("0x#0022ff")
    embed.setAuthor(`${message.author.tag}`)
})


client.login('Your Token Here');