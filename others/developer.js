const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
  approveemoji,
  denyemoji 
} = require(`../config.json`);

module.exports = {
  name: "developer",
  aliases: ["dev"],
  description: "Bot Developers",
  execute(message) {

    let developerEmbed = new MessageEmbed()
      .setTitle("Developers")
      .setDescription("Love using Velocity? Great, Thanks to our beloved Developers")
      .setColor("#00FFFF")
      .setAuthor('Velocity™','https://cdn.discordapp.com/attachments/749924032144605194/877221555116052510/714835632077144064.png')
      .setThumbnail(message.guild.iconURL())
      .addField(":man_detective: RV#2299", "`ID: 472633151920013315`")
      .addField(":man_detective: Amrit#3012","`ID: 511246734219935754`")
      .addField(":man_detective: General JD                 👑#1313","`ID: 540109276106981389`")
      .addField(":man_detective: Kc#0215","`ID: 496576662121611266`")
      .addField(":man_detective: SgNotOp#8711","`ID: 467227794334679051`")
      .addField(`Use the following link to Join our Discord`, 'Join Discord - https://discord.gg/PAHER9P', true)
      .setFooter('Bot Developer','https://cdn.discordapp.com/attachments/749924032144605194/877221555116052510/714835632077144064.png')

    developerEmbed.setTimestamp();

    return message.channel.send(developerEmbed).catch(console.error);
  }
};