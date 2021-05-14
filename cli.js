const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (text)=>{
    console.log('You typed %s', text);

    if(text==='exit'){
        rl.close();
    }
});