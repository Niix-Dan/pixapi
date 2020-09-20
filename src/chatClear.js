"use strict";

const Discord = require('discord.js')


const clear = (message, value) => {
    let e;
    if(isNaN(message)) {
        e = new Error();
        e.code = 400;
        e.message = 'Message is not defined';
    }
    if(isNaN(parseInt(value))) {
        e = new Error();
        e.code = 400;
        e.message = 'Value is not defined';
    }
    if (e) {
		return new Promise(function (resolve, reject) {
			reject(e);
		});
	}
    
    return message.channel.bulkDelete(value, true).then(a => {
        return true
    }).cath(err => {
        e = new Error();
        e.code = 400;
        e.message = 'Internal error ocurred!';
        return new Promise(function (resolve, reject) { reject(e); });
    })
    
}

module.exports = clear;