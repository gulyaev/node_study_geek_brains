const request = require('request');
const cheerio = require('cheerio');

request('https://klops.ru/', (err, responce, html) => {
    if(!err && responce.statusCode === 200) {
        const $ = cheerio.load(html);

        console.log($('.heading-section').eq(0).text());
    }
});