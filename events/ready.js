module.exports = async client => {

    console.log("Bot foi iniciado com Sucesso!");
    const mem = client.guilds.cache.get("603276550309281876");
    const canal = client.channels.cache.get("758011667572326420");
    canal.setName(`➤ Membros: ${mem.memberCount}`);
    console.log(`${mem.memberCount}`);

    client.user.setActivity('Twitch.tv/venrar', {type: 'WATCHING'});

}