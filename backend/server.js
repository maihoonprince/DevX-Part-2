import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatBot.js";

dotenv.config();

const app = express();

// CORS Configuration (Allow frontend domains)
const allowedOrigins = [
  "http://localhost:8080", // Local Frontend (Vite)
  "https://yourdevx.netlify.app/" // Deployed Frontend (Netlify)
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

// API Routes
app.use("/api", chatRoutes);

// Root Route for Testing Backend Deployment
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Port Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
