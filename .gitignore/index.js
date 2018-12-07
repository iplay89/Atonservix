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
                title: 'TITRE',
                description: 'test',
                fields: [{
                    name: 'Liste des commande',
                    value: 'commande1'
                }]
            }});
        }
    }
});

bot.login(process.env.TOKEN);
