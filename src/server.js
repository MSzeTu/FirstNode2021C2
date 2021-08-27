const myData = require('./mydata.js');
const Polygon = require('./Polygon.js');
const _ = require('underscore');

console.dir('hello');

const helloWorld = () => {
    console.log("Hello World!");
};

helloWorld();

myData.getMessage();

const myPolygon = new Polygon(10, 15);

const array = [1,2,3,4,5];
const found = _.contains(array, 3);
console.log(found);
