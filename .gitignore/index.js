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
                    name: '__**Liste des commandes**__',
                    value: '*&ip ~ Ip de notre serveur*'
                },
                {
                    name: '*&plan ~ Plan du parc*',
                    value: '*&reseaux ~ Nos differents reseaux*'
                },
                {
                    name: '*&boutique ~ Boutique disponible*',
                    value: '*&news ~ Nouveautes sur le parc*'
                }],
                timestamp: new Date(),
                footer: {
                    text:'MCAsterix tout droit réservé - 2018~2019'
                }
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
                    name: '__**Ip de notre serveur**__',
                    value: '*play.mcasterix.eu*'
                }],
                timestamp: new Date(),
                footer: {
                    text:'MCAsterix tout droit réservé - 2018~2019'
                }
            }});
        }
        else if(message.content === '&reseaux') {
            message.channel.send({embed: {
                color: 3447003,
                author : { 
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '*MCAsterix bot - &reseaux*',
                fields: [{
                    name: '__**Nos differents reseaux**__',
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
                }],
                timestamp: new Date(),
                footer: {
                    text:'MCAsterix tout droit réservé - 2018~2019'
                }
            }});
        }
        else if(message.content === '&plan') {
            message.channel.send({embed: {
                color: 3447003,
                author : { 
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '*MCAsterix bot - &plan*',
                fields: [{
                    name: '__**Plan du parc**__',
                    value: '*[Clique ici](https://www.parcasterix.fr/sites/default/files/imce/pa-guide-pmr-2017-fr.pdf)*'
                }],
                timestamp: new Date(),
                footer: {
                    text:'MCAsterix tout droit réservé - 2018~2019'
                }
            }});
        }
        else if(message.content === '&boutique') {
            message.channel.send({embed: {
                color: 3447003,
                author : { 
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '*MCAsterix bot - &boutique*',
                fields: [{
                    name: '__**Boutique en ligne**__',
                    value: '*[Clique ici](http://shop-mcasterix.fr)*'
                }],
                timestamp: new Date(),
                footer: {
                    text:'MCAsterix tout droit réservé - 2018~2019'
                }
            }});
        }
        else if(message.content === '&news') {
            message.channel.send({embed: {
                color: 3447003,
                author : { 
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '*MCAsterix bot - &news*',
                fields: [{
                    name: '__**Nouveautés sur le serveur**__',
                    value: '*Réouverture du serveur le 9/12*'
                }],
                timestamp: new Date(),
                footer: {
                    text:'MCAsterix tout droit réservé - 2018~2019'
                }
            }});
        }
    }
});

bot.login(process.env.TOKEN);
