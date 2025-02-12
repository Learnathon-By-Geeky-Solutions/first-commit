import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import connectDB from './config/db.js';

const app = express();
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Routes


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({
    message: "No such route exists"
  })
});


// Export the app (so it can be used in `server.js`)
export default app;
