import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helloRoute from "./routes/helloRoute";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so that Angular and Next.js apps can access the backend
app.use(cors());
app.use(express.json());

// Register routes
app.use("/api", helloRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
