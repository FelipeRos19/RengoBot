const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

        message.delete();

        
        let ch = message.channel;

        const msg = ch.send( 
        new Discord.MessageEmbed()
        .setColor("#FF9900")
        .setTitle("Informações sobre o RengoBot")
        .addField("Quem criou o RengoBot?", "\nO RengoBot foi idealizado/desenvolvido pela **Equipe de Moderação**!")
        .addField("Quais suas funções?", "\nO RengoBot faz a função de:\n\n- Gerenciar níveis\n- Embed messages\n- Moderação\n\n")
        .addField("Quer conhecer o Código Fonte?", "O RengoBot é totalmente **Open-Source** seu código se encontra em: **github/FelipeSz19**!")
        .addField("Quer fazer uma sugestão?", "Utilize: !sugestao <Sugestão> / <Motivo>")

        .setFooter(`ID do Usuário: ${message.author.id}`, message.author.avatarURL())
        .setTimestamp()
        );

}