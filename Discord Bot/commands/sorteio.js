const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    const ch = client.channels.cache.get("760672763391377418");
    
    if(!message.member.roles.cache.has("760681290520592396")) {
        message.channel.send("❎ Você não tem permissão");
    } else {

        let sargs = args.join(" ").split(" / ");
        let time = sargs[0];
        let premio = sargs[1];
        let user = sargs[2];
        
        let timef = time * 1000 * 60;
        const embed = new Discord.MessageEmbed()
        .setDescription("Para participar do sorteio reaja com 🎉!")
        .addField("Patrocinado", `${user}`)
        .addField("Premio", `${premio}`)
        .setColor("#FF9900")
        .setAuthor(`Sorteio!`)
        .setFooter(`Sorteio acaba em ${time} minutos`);

        ch.send({embed})
        .then(g =>{
            g.react("🎉");
            var collector = g.createReactionCollector(
                (r, u) => r.emoji.name === "🎉"
            );
            collector.on("end", r => {
                if (!r.first()) {

                    const embed2 = new Discord.MessageEmbed()
                    .setDescription("Ninguém participou do sorteio!")
                    .setColor("#FF9900")
                    .setAuthor(`Sorteio!`)

                    g.clearReactions();
                    return g.edit({embed2});

                }
                var user = r
                    .first()
                    //.users.filter(user => !user.bot)
                    .random();
                    const embed3 = new Discord.MessageEmbed()
                    .setDescription(`O Ganhador foi: **${user.tag}**`)
                    .setColor("@FF9900")
                    .setFooter("Acabou!")
                    g.clearReactions();
                    g.edit({embed3});
                    ch.send(`Parabéns **${user}**, você ganhou!`);

            });
            setTimeout(() => {
                collector.stop();
            }, timef)
        });


    }


}