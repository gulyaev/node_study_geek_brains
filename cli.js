const fs = require('fs');

/*
fs.exists('./package.json', (exists) => {
    if(exists){
        fs.readFile('./package.json', (err, data) => {
            console.log(data.toString());
        });
    }
});
*/

const exists = fs.existsSync('./package.json');

if (exists) {
    const data = fs.readFileSync('./package.json');

    console.log(data.toString());
}