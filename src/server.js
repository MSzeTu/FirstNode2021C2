const myData = require('./mydata.js');
const Polygon = require('./Polygon.js');
const _ = require('underscore');

const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    if(request.url === '/favicon.ico') {
        console.log('favicon request');
    }

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(myData.getMessage());
    response.end();
};

http.createServer(onRequest).listen(port);

// console.dir('hello');

// const helloWorld = () => {
//     console.log("Hello World!");
// };

// helloWorld();

// myData.getMessage();

// const myPolygon = new Polygon(10, 15);

// const array = [1,2,3,4,5];
// const found = _.contains(array, 3);
// console.log(found);
