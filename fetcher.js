
url = process.argv[2];
path = process.argv[3];
const request = require('request');
const fs = require('fs');

console.log(url);
console.log(path);

const fetcher = function (url, path) {
  
request(url, (error, response, body) => {
  console.log(`error:`, error);
  console.log(`statuscode:`, response && response.statusCode);
  fs.writeFile(path, body, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Downloaded ${body.length} bytes and saved to ${path}`);
  })
})
};

fetcher(url, path)
