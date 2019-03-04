const app = require('./src/app');
const port = process.env.port || 3000;

const server = app.listen(port, function() {
	console.log("Express server listens on port "+port);
});