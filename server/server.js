import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import usersRoutes from '../server/routes/users.route.js'
import videosRoutes from '../server/routes/videos.route.js'
import commentRoutes from '../server/routes/comments.route.js'
import authRoutes from '../server/routes/auth.route.js'
import cookieParser from "cookie-parser";
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
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('', videosRoutes )
app.use('', commentRoutes)

// Error handling to display to users.
app.use((err, req, res, next ) => {
  const status = err.status || 500
  const message = err.message || "Something went wrong"
  return res.status(status).json({
    success:false,
    status:status,
    message:message
  })
})

app.listen(8800, () => {
  connect()
  console.log("Backend Server running");
})