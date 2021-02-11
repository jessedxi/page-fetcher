
url = process.argv[2];
path = process.argv[3];
const request = require('request');
const fs = require('fs');



const fetcher = function (url, path) {
  if(url === undefined) { 
    console.log('URL cannot be undefined')
  };
  if(path === undefined) {
    console.log('Please input valid path.')
  };
  if(url !== undefined && path !== undefined) {
  request(url, (error, response, body) => {
    console.log(`error:`, error);
    console.log(`statuscode:`, response && response.statusCode);
    if(response.statusCode !== 200) {
      console.log("URL ERROR");
      process.exit()
    };
    fs.writeFile(path, body, (err) => {
      if (err) {
        return console.log(err.message);
      } else {
      console.log(`Downloaded ${body.length} bytes and saved to ${path}`);
      }
    })
  })
}
};

fetcher(url, path)
