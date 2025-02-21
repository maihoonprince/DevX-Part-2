import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatBot.js";

dotenv.config();

const app = express();

// Dynamically set CORS for different environments
const allowedOrigins = [
  "http://localhost:5173", // Local Frontend (Vite)
  "https://reliable-griffin-6099a1.netlify.app" // Deployed Frontend (Netlify)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(express.json());

// API Routes
app.use("/api", chatRoutes);

// Root Route for Testing Backend Deployment
app.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

// Global Error Handling
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Port Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
