const http = require("http");
const chalk = require("chalk");
const msg = require('./text');
const fs = require('fs');

var server = http.createServer(function (request, response) {
	response.write("<title>Node & NPM Exercise</title>");
	response.write("<h1>");
	response.write("Hello World!");
	response.write("</h1>");
	response.write("<h2>");
	response.write("to run this project follow these commands -> npm i > npm test/node index.js");
	response.write("</h2>");
	response.write("<p>");
	response.write("For dependency I have installed Chalk");
	response.write("</p>");
	response.write("<p>");
	response.write("For development dependency I have installed Nodemon");
	response.write("</p>");
	response.write("<p>");
	response.write("For synchronous and asynchronous call, check console please");
	response.write("</p>");
	//msg is imported from text.js file
	response.write(msg);
	response.end();
});

//synchronous call to file
console.log(chalk.red("before sync file call"));
let content = fs.readFileSync('./users.txt', 'utf8')
console.log(chalk.cyan(content));
console.log(chalk.red("after sync file call\n"));

//asynchronous call to file
console.log(chalk.red("before async file call"));
fs.readFile('./users.txt', 'utf8', function (err, contents) {
	console.log(chalk.magenta(contents));
});
console.log(chalk.red("after async file call"));



server.listen(1234);
console.log(chalk.blue("Server is listening"));