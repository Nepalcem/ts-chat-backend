import { WebSocketServer } from "ws";
import { createServer } from "http";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "environment", ".env") });

const PORT = process.env.PORT || 4000;
const server = createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("A client connected");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
  });

  ws.on("close", () => {
    console.log("A client disconnected");
  });

  ws.send("Welcome to the WebSocket chat!");
});

// Start the server to listen on the specified port
server.listen(PORT, () => {
  console.log(`[server]: WebSocket server is running at ws://localhost:${PORT}`);
});
