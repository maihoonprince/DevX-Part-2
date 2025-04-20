import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatBot.js";

dotenv.config();

const app = express();

// Allow specific frontend origins
const allowedOrigins = [
  "http://localhost:5173", // Local Vite frontend
  "http://localhost:8080", // Local frontend (alternative port)
  "http://localhost:8082",
  "https://yourdevx.netlify.app", // Deployed frontend
  "https://devvx.netlify.app"
];

// Configure CORS properly
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// API Routes
app.use("/api", chatRoutes);

// Root Route to Check Backend Health
app.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

// Global Error Handling
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
