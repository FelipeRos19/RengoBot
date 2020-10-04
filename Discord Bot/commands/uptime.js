const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete();
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if(hours >= 24) {
        let c = hours/24;
        days = c;
    }

    let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

    const embed = new Discord.MessageEmbed()
        .setTitle(`Tempo de atividade 🕰️`)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#FF9900")
        .setDescription(`**Estou online há:**\n${uptime}`)

    message.channel.send(embed);
};