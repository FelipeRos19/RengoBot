const Discord = require('discord.js')

module.exports = {
    name: 'sugestao',
    description: 'Segerir algo',
    execute(message, args) {

        message.delete();

        let sargs = args.join(" ").split(" / ");
        let sugestao = sargs[0];
        let reason = sargs[1];

        
        let ch = message.client.channels.cache.get("760671926120349715");

        const msg = ch.send( 
        new Discord.MessageEmbed()
        .setColor("#FF9900")
        .addField("Autor: ", message.author)
        .addField("Sugestão: ", sugestao)
        .addField("Motivo: ", reason)
        .setFooter(`ID do Usuário: ${message.author.id}`, message.author.avatarURL())
        .setTimestamp()
        ).then(function (message) {
            message.react("✅");
            message.react("❎");
        }).catch(function(){
            //nada
        });
        

    }

}