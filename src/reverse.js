'use strict';

/**
 * @example console.log(pixapi.reverse("Hello")); //output: olleH
*/

const reverse = (text) => {
    if(!text) throw new TypeError('Unknown text!');

    let finaltext = "";

    for(var i = 0 ; i < text.length ; i++) {
        finaltext+=text.charAt((text.length-i)-1);
    }

    return finaltext;
}


module.exports = reverse;