"use strict";

const Discord = require('discord.js')


const embed = (content, color) => {
    if(content == null) content = 'Error! Input Content'
    if(color == null) color = 'RANDOM'
    let Embed = new Discord.MessageEmbed()
        .setDescription(content)
        .setColor(color)
    return Embed
}

module.exports = embed;