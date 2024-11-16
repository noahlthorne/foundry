import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exampleRoute from "./routes/exampleRoute";
import { PrismaClient } from "@prisma/client";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

// Enable CORS so that Angular and Next.js apps can access the backend
app.use(cors());
app.use(express.json());

// Register routes
app.use("/api", exampleRoute);
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
