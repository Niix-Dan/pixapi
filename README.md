# Description

PixApi is a simple **[node.js](https://www.npmjs.com/)** api in order to simplify many things in development for small programmers

## Use Example

```javascript
const PixApi = require('pixapi');

console.log(PixApi.formatDate(`Data e Hora Atuais DD/MM/YYYY HH:mm:ss`, Date.now())); // Date format command
console.log(PixApi.replaceString(10, 50, "+", "-")); // Replace string
console.log(PixApi.calc("123*123")); // Calcs String
console.log(PixApi.randomChars(10)); // Random characters
console.log(PixApi.randomNumber(300, 310)); // random number between 300 and 310

let time = PixApi.formatTimer(5.88e+6); // Time in millisseconds
console.log(`${time.days}d ${time.hours}h ${time.seconds}s`);
```
