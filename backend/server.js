import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoutes from './routes/chatBot.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Chat API Route
app.use('/api', chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
