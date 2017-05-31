var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Uki have 15 web developers', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 
