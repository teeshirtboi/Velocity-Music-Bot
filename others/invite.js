const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Velocity? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Velocity','https://media.discordapp.net/attachments/775702901393063937/873089889770561587/f9f93b7ed4219865fd504af72d97644b.png?width=205&height=205')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link by to add Velocity to your discord server`, 'https://dsc.gg/velocityrv', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};