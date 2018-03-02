const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
client.login(settings.token);
