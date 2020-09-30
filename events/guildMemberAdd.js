module.exports = async (client, member) => {
    
    const mem = client.guilds.cache.get("603276550309281876");
    const canal = client.channels.cache.get("758011667572326420");
    canal.setName(`➤ Membros: ${mem.memberCount}`);

	const embed = {
      "color": 16750848,
      "title": `${member.user.tag}  | Bem-Vindo(a)!`,
      "thumbnail": {
          "url": `${member.user.displayAvatarURL()}`
      },
      "description": `Salve ${member.user}! Você acaba de entrar no servidor do **Venrar**, aqui você poderá interagir com o Venrar e ficar sabendo das **Novidades**!`,
      "fields": [
          {
              "name": `📢 Fique atento!`,
              "value": "Novos vídeos/Lives do Venrar serão anunciadas no <#603282710043033629>!",
              "inline": true
          },
          {
            "name": "📺 Inscreva-se no canal do YouTube se você ainda não é inscrito! ",
            "value": "[Canal](https://www.youtube.com/user/leonardo0404ful)",
            "inline": true              
          },
          {
            "name": "🎥 Siga na twitch! ",
            "value": "[Venrar](https://www.twitch.tv/venrar)",
            "inline": true
          },
          {
            "name": "🐦 Siga no Twitter! ",
            "value": "[@venrar3](https://twitter.com/venrar3)",
            "inline": true              
          },
          {
            "name": "📰 Siga no Instagram! ",
            "value": "[@leonardo_gabs](https://www.instagram.com/leonardo_gabs/)",
            "inline": true              
          }
      ]
      
	};
	member.guild.channels.cache.get("757758804552188017").send({embed});
}