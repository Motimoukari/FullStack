const http = require("http");

// Create server object
http.createServer((rew, res) => {
    //write response
    res.write("hello world");
    res.end();
}).listen(5000, () => console.log("server running"));