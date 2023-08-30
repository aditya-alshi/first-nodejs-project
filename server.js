const connect = require('connect');
const http = require('http');
const fs = require('fs');

const app = connect();

function thehome(homeRequest, homeResponse){
    console.log("user is requesting home-page" + homeRequest.url);
    homeResponse.writeHead(200,{"Context-Type" : "text/html"})
    fs.createReadStream('./index.html').pipe(homeResponse);
}
function theRickshaw(rickshawRequest, rickshawResponse){
    console.log("user is requesting rickshaw-page" + rickshawRequest.url);
    rickshawResponse.writeHead(200,{"Context-Type" : "text/html"})
    fs.createReadStream('./rickshaw.html').pipe(rickshawResponse);
}
function theTrain(trainRequest, trainResponse){
    console.log("user is requesting home-page" + trainRequest.url);
    trainResponse.writeHead(200,{"Context-Type" : "text/html"})
    fs.createReadStream('./train.html').pipe(trainResponse);
}

app.use('/rickshaw', theRickshaw);
app.use('/train', theTrain);
app.use('/', thehome);

http.createServer(app).listen(5465);
console.log("the server is active ...")