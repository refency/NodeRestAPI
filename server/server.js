const http = require('http');;
require('dotenv').config();

const List = require('./controllers/list')
const Task = require('./controllers/task')

const PORT = process.env.PORT_API || 8000

const server = http.createServer(async (req, res) => {
    if (req.url === "/list" && req.method === "GET") {
        await new List().getLists(req, res);
    }

    else if (req.url === "/list" && req.method === "POST") {
        await new List().createList(req, res);
    }

    else if (req.url === "/task" && req.method === "GET") {
        await new Task().getTasks(req, res);
    }

    else if (req.url === "/task" && req.method === "POST") {
        await new Task().createTask(req, res);
    }

    else if (req.url.match(/\/task\/status\/([0-9]+)/) && req.method === "PUT") {
        await new Task().updateStatus(req, res);
    }

    else if (req.url.match(/\/task\/number\/([0-9]+)/) && req.method === "PUT") {
        await new Task().updateNumber(req, res);
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
