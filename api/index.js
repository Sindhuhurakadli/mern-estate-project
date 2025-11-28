import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoute from "./routes/auth.route.js";  // <-- only this

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const app = express();

app.use(express.json());

// Use routes
app.use('/api/users', userRoute);   // Works fine

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
