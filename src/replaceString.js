"use strict";

/**
 * @example console.log(pixapi.replaceString(5, 10, "-", "0")); //output: -----00000
*/
const replaceString = (value1, value2, base, replaced) => {
    replaced = base.repeat(value1)+replaced.repeat(value2 - value1)
    return replaced;
}


module.exports = replaceString