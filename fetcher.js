const fs = require('fs');

const request = require('request');

request('http://example.edu', (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    fs.writeFile('./index.html', body, (err) => {
        //writes the data to a file
        if (err) {
            console.error(err)
            //returns error
            return
         }   
            console.log(`Downloaded and saved ${body.length} bytes to ./index.html.`);
          //file written successfully
     });


});


