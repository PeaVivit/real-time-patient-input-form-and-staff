const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("patient:update", (data) => {
    console.log("typing...", data);

    socket.broadcast.emit("patient:data", {
      data,
      status: "typing",
    });
  });

  socket.on("patient:submit", (data) => {
    console.log("submitted!", data);

    io.emit("patient:data", {
      data,
      status: "submitted",
    });
  });
});

httpServer.listen(4000, () => {
  console.log("Socket Server running on http://localhost:4000");
});