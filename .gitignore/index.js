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
                title: '_MCAsterix bot - &aide_',
                fields: [{
                    name: '__**Liste des commandes**__',
                    value: '_&ip ~ Ip de notre serveur_'
                },
                {
                    name: '_&plan ~ Plan du parc_',
                    value: '_&reseaux ~ Nos differents reseaux_'
                },
                {
                    name: '_&boutique ~ Boutique disponible_',
                    value: '_&news ~ Nouveautes sur le parc_'
                },
                {
                    name: '_&attraction ~ attractions ouvertes_',
                    value: '_play.mcasterix.eu_'
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
                title: '_MCAsterix bot - &ip_',
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
                title: '_MCAsterix bot - &reseaux_',
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
                title: '_MCAsterix bot - &plan_',
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
                title: '_MCAsterix bot - &boutique_',
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
                title: '_MCAsterix bot - &news_',
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
        else if(message.content === '&attraction') {
            message.channel.send({embed: {
                color: 3447003,
                author : { 
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '_MCAsterix bot - &attraction_',
                fields: [{
                    name: '__**Liste des attractions ouvertes**__',
                    value: '_&attraction ~ la liste_'
                },
                {
                    name: '_Le carousel de César_',
                    value: '_Romus et rapidus_'
                },
                {
                    name: '_Pegase express_',
                    value: '_Le vol d icare_'
                },
                {
                    name: '_La rivière d élis_',
                    value: '_Discobélix_'
                },
                {
                    name: '_Le grand splach_',
                    value: '_Les chars tamponneurs_'
                },
                {
                    name: '_Menhir express_',
                    value: '_play.mcasterix.eu_'
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
