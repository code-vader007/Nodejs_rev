const fs = require('fs');

//Read two files
const first = fs.readFileSync('../content/first.txt','utf8')
const second = fs.readFileSync('../content/second.txt','utf8')
console.log(first,second)

//Write a file
fs.writeFileSync('../content/write.txt','Just wrote this')