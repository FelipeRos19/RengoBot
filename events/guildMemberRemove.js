module.exports = async (client, member) => {

    const mem = client.guilds.cache.get("603276550309281876");
    const canal = client.channels.cache.get("758011667572326420");
    canal.setName(`➤ Membros: ${mem.memberCount}`);
    
}