const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const port = process.env.PORT || 300

server.listen(port,() => {
    console.log(`server is running on prot ${port}`);
});
