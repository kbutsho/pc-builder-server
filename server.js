const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require('cors')
const middleware = jsonServer.defaults();

server.use(cors({ origin: '*' }));
server.use(middleware);
server.use(
	jsonServer.rewriter({
		"/api/*": "/$1",
	})
);
server.use(router);
server.listen(8000, () => {
	console.log("server is running");
});

module.exports = server;
