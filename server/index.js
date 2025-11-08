import "dotenv/config";
import express from "express";
import cors from "cors";

const handleDemo = async (req, res) => {
  res.json({ message: "Hello from Express server" });
};

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Add more routes here as needed
  // app.post("/api/auth/register", handleRegister);
  // app.post("/api/auth/login", handleLogin);
  // etc.

  return app;
}
