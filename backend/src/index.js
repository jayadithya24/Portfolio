import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Message from './models/Message.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

const app = express();

const port = Number(process.env.PORT || 5000);
const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const isAllowedOrigin = (origin) => {
  if (!origin) return true;
  if (allowedOrigins.includes(origin)) return true;

  try {
    const url = new URL(origin);
    return url.hostname.endsWith('.vercel.app') || url.hostname === 'vercel.app';
  } catch {
    return false;
  }
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
  })
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'portfolio-backend' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: 'name, email, and message are required',
    });
  }

  try {
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    return res.status(201).json({
      ok: true,
      message: 'Message received successfully. Thank you for contacting!',
      id: newMessage._id,
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : 'Failed to save message. Please try again later.',
    });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
