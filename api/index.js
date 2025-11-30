import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/auth', authRouter);  // <-- signup will work
// app.use('/api/user', userRoute);  // <-- signup will also work here
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
