const fs = require("fs");

fs.exists("./package.json", (exists) =>{
    if(exists) {
        fs.readFile("./package.json", (err, data) => {
            console.log(data.toString());
        });
    }
});