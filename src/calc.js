"use strict";

function calculate(input) {

    var f = {
      add: '+',
      sub: '-',
      div: '/',
      mlt: '*',
      mod: '%',
      exp: '^'
    };
  
    f.ooo = [
      [
        [f.mlt],
        [f.div],
        [f.mod],
        [f.exp]
      ],
      [
        [f.add],
        [f.sub]
      ]
    ];
  
    input = input.replace(/[^0-9%^*\/\-+.]/g, '');
  
    var output;
    for (var i = 0, n = f.ooo.length; i < n; i++) {
      var re = new RegExp('(\\d+\\.?\\d*)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*)');
      re.lastIndex = 0;

      while (re.test(input)) {
        output = _calculate(RegExp.$1, RegExp.$2, RegExp.$3);
        if (isNaN(output) || !isFinite(output)) 
          return output;
        input = input.replace(re, output);
      }
    }
  
    return output;
  
    function _calculate(a, op, b) {
      a = a * 1;
      b = b * 1;
      switch (op) {
        case f.add:
          return a + b;
          break;
        case f.sub:
          return a - b;
          break;
        case f.div:
          return a / b;
          break;
        case f.mlt:
          return a * b;
          break;
        case f.mod:
          return a % b;
          break;
        case f.exp:
          return Math.pow(a, b);
          break;
        default:
          null;
      }
    }
  }

/**
 * @example console.log(pixapi.calc("117 + 117"); //output: 234
 * @description this resource is beta
*/
const calc = (calcs) => {
    if(!calcs || calcs == '') throw new TypeError('Unknown calc');

    let calc = calculate(calcs);
    return calc;
}


/*const calc = (calcs) => {
    let e;
    calcs = calcs.replace('x', '*');
    calcs = calcs.replace(' ', '');
    if(calcs == null) {
        e = new Error();
        e.code = 400;
        e.message = 'Calcs is not defined';
        return new Promise(function (resolve, reject) { reject(e); });
    }
    let resp;

    try {
        resp = math.evaluate(calcs)
        return resp;
    } catch (e) {
        e = new Error();
        e.code = 400;
        e.message = 'Invalid calc ask';
        return new Promise(function (resolve, reject) { reject(e); });
    }
}*/


module.exports = calc
