const Discord = require('discord.js')
const client = new Discord.Client();

module.exports = {
    name: 'anuncio',
    description: 'Anunciar',
    execute(message, args) {

        if(!message.member.roles.cache.has("760681290520592396")) {
            message.channel.send("❎ Você não tem permissão");
        } else {
            if(args[0] == null) {

                message.channel.send("❎ Sem argumentos!");

            } else {

                message.delete();

                let sargs = args.join(" ").split(" / ");
                let title = sargs[0];
                let msg = sargs[1];

                const embed = new Discord.MessageEmbed()
                .setColor("#FF9900")
                .addField(`${title}`, `**\n${msg}**`)
                .setFooter(`Enviado por: ${message.author.username}`, message.author.avatarURL())
                .setTimestamp();


                let ch = message.client.channels.cache.get("760672763391377418");
                ch.send("@here",{embed});

            }
        }

    }

}