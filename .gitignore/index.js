const Discord = require("discord.js");

var PREFIX = "&";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Atonservix, &aide");
    console.log("Atonservix / le bot demarre")
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '&aide') {
            message.channel.send({embed: {
                color: 3447003,
                author : { 
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '*MCAsterix bot - &aide*',
                fields: [{
                    name: '**Liste des commandes**',
                    value: '*&ip ~ Ip de notre serveur*'
                },
                {
                    name: '*&plan ~ Plan du parc*',
                    value: '*&reseaux ~ Nos differents reseaux*'
                },
                {
                    name: '*&boutique ~ Boutique disponible*',
                    value: '*&news ~ Nouveautes sur le parc*'
                }]
            }});
        }
        else if(message.content === '&ip') {
            message.channel.send({embed: {
                color: 3447003,
                author : { 
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '*MCAsterix bot - &ip*',
                fields: [{
                    name: '**Ip de notre serveur**',
                    value: '*play.mcasterix.eu*'
                }]
            }});
        }
        else if(message.content === '&reseaux') {
            message.channel.send({embed: {
                color: 3447003,
                author : { 
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '*MCAsterix bot - &ip*',
                fields: [{
                    name: '**Nos differents reseaux**',
                    value: '*Suivez nous sur ...*'
                },
                {   name: '**Twitter**',
                    value: '*[Clique ici](https://twitter.com/MCAsterixINFO)*'
                },
                {   name: '**Facebook**',
                    value: '*[Clique ici](https://www.facebook.com/mcasterixINFO)*'
                },
                {   name: '**email**',
                    value: '*contact@mcasterix.eu*'
                }]
            }});
        }
    }
});

bot.login(process.env.TOKEN);
