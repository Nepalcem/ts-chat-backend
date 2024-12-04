import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { WebSocketServer } from "ws";
import { createServer } from "http";

dotenv.config({ path: path.join(__dirname, "environment", ".env") });

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const server = createServer(app);
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



app.listen(PORT, () => {
  console.log(`[server]: Server D is running at http://localhost:${PORT}`);
});
