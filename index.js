//circle=require('./circle.js');

//console.log(circle.b(3));

const fs=require('fs');
let text=fs.readFileSync('./File/text.txt','utf8');

//console.log(text);


text=`Copied Text:${text}`;

fs.writeFileSync('./File/output.txt',text);
