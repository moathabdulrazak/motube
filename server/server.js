import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import usersRoutes from '../server/routes/users.route.js'

const app = express()
dotenv.config()
mongoose.set("strictQuery", true);

const connect = async () => {

  try {
    if (!process.env.MONGO) {
      console.error("MONGODB not found in environment variables!");
      process.exit(1);
    }
    
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};


app.use('/api/users', usersRoutes)


app.listen(8800, () => {
  connect()
  console.log("Backend Server running");
})