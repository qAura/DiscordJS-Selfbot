const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("");
  console.log("");
  console.log("   ██████╗ ███████╗███╗   ███╗ ██████╗ ████████╗███████╗");
  console.log("   ██╔══██╗██╔════╝████╗ ████║██╔═══██╗╚══██╔══╝██╔════╝");
  console.log("   ██████╔╝█████╗  ██╔████╔██║██║   ██║   ██║   █████╗  ");
  console.log("   ██╔══██╗██╔══╝  ██║╚██╔╝██║██║   ██║   ██║   ██╔══╝  ");
  console.log("   ██║  ██║███████╗██║ ╚═╝ ██║╚██████╔╝   ██║   ███████╗");
  console.log("   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚══════╝");
  console.log("");
  console.log("                [+] Remote Selfbot [+]")
  console.log("               [-] $help for commands [-]")
   client.user.setPresence({
     game: {
          name: 'Im Offline',
          type: "STREAMING",
          url: "https://www.twitch.tv/qAura"
      }
  });
});

client.on("message", async message => {
  if(message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if(command === "ping") {
	const helpEmbed = new Discord.RichEmbed()
  .setTitle("Remote Selfbot!")
  .setThumbnail("https://media.discordapp.net/attachments/561513392402202636/602442001694064680/l12c7vKVRCd-XLIdDkLUDg.png")
  .addField("Latency Is 30ms!", ":ping_pong: ")
  .addField("API Latency Is 48ms", ":ping_pong: ")
  .setTimestamp()

  message.reply(helpEmbed);
}

   if(command === "spam") {
 		if(!args[0])
 		{
 		return message.reply("WTF Are You Doing!, Provide An Argument!");
 		}
 		  for (i = 0; i < 400; i++) {
 			   message.channel.send(args[0]);
 		  }
  }

  if(command === "kick") {
     if(message.author.id != config.userid)
       return message.reply("Sorry I Cant Do That");

     let member = message.mentions.members.first() || message.guild.members.get(args[0]);
     if(!member)
       return message.reply("Mention A User Please!");
     if(!member.kickable)
       return message.reply("Error I Do Not Have Permmisions");

     let reason = args.slice(1).join(' ');
     if(!reason) reason = "Unspecified!";

     await member.kick(reason)
       .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
     message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

   }
   







});

client.login(config.token);
