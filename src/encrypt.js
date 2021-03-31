"use strict";

/**
 * @example pixapi.encrypt.encrypt("Text", "Password") // output encrypted text
*/
const e = (txt, pass) => {
    if(!txt || !pass) throw new TypeError("Missing Text or Password!");

    let prand = "";

    for(let i = 0 ; i < pass.length ; i++) {
        prand+=pass.charCodeAt(i).toString();
    }

    let sPos = Math.floor(prand.length / 5);
    let mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    let incr = Math.ceil(pass.length / 2);
    let modu = Math.pow(2, 31) - 1;

    if(mult < 2) throw new TypeError('The text has been short!');

    let salt = Math.round(Math.random() * 1000000000) % 100000000;
    prand += salt;

    while(prand.length > 10) {
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }

    prand = (mult * prand * incr) % modu;
    let enc_chr = "", enc_str = "";
    for(let i = 0 ; i < txt.length ; i++) {
        enc_chr = parseInt(txt.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
        if(enc_chr < 16) {
            enc_str += "0" + enc_chr.toString(16);
        } else {
            enc_str += enc_chr.toString(16);
        }
        prand = (mult * prand + incr) % modu;
    }
    salt = salt.toString(16);
    while(salt.length < 8) salt = "0" + salt;
    enc_str += salt;

    return enc_str;
}

/**
 * @example pixapi.encrypt.decrypt("Encrypted Text", "Password") // output decrypted text
*/
const d = (txt, pass) => {
    if(!txt || !pass) throw new TypeError("Missing Encrypted Text or Password!");
    if(txt.length < 8) throw new TypeError("Invalid Encrypted Text!");
    

    let prand = "";

    for(let i = 0 ; i < pass.length ; i++) {
        prand+=pass.charCodeAt(i).toString();
    }

    let sPos = Math.floor(prand.length / 5);
    let mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    let incr = Math.ceil(pass.length / 2);
    let modu = Math.pow(2, 31) - 1;
    var salt = parseInt(txt.substring(txt.length - 8, txt.length), 16);

    txt = txt.substring(0, txt.length - 8);
    prand += salt;
    while(prand.length > 10) {
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand * incr) % modu;
    let enc_chr = "", enc_str = "";

    for(let i = 0 ; i < txt.length ; i+=2) {
        enc_chr = parseInt(parseInt(txt.substring(i, i+2), 16) ^ Math.floor((prand / modu) * 255));
        enc_str += String.fromCharCode(enc_chr);
        prand = (mult * prand + incr) % modu;
    }

    return enc_str;
}

/**
 * @example console.log(pixapi.encrypt.encrypt("Text", "Password"); // Encrypt a text
 * @example console.log(pixapi.encrypt.decrypt("Encrypted Text", "Password"); // Decrypt a text
*/
let encrypt = {
    encrypt: e,
    decrypt: d
}

module.exports = encrypt;



