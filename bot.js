const Discord = require("discord.js");
const fs = require("fs");
const {prefix,token} = require("./config.json");
const client = new Discord.Client();
const Enmap = require('enmap')
client.commands = new Enmap();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  if (!file.endsWith(".js")) return;
  
	  let props = require(`./commands/${file}`);
  
	  let commandName = file.split(".")[0];
	  console.log(`${commandName} carregado com sucesso! ✅`);
	  
	  client.commands.set(commandName, props);
	});
  });

client.on("message", async message => {

	if (message.author.bot) return;
	if (message.channel.dm === "dm") return;
	
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	
	if (!message.content.startsWith(prefix)) return;
	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client, message, args); 

});

client.login(token);