//simple print
console.log("Hello World")
console.log(process.platform)

// defining global variables
global.someNum = 9;

// using the global object, process

process.on('exit', (code) => {
  console.log('About to exit with code:', someNum, code);
})

//calling function using emit even when this is not ended
process.emit('exit', 8);

//interacting with the file system
const { readFile, readFileSync } = require('fs');

//reading local file
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);


