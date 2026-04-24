const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("OK");
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("patient:update", (data) => {
    socket.broadcast.emit("patient:data", {
      data,
      status: "typing",
    });
  });

  socket.on("patient:submit", (data) => {
    io.emit("patient:data", {
      data,
      status: "submitted",
    });
  });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});