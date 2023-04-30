import  express from "express";
import {addVideo, deleteVideo, getVideo, updateVideo} from '../controllers/videos.controller.js'
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router()



//create a video
router.post("/", verifyToken, addVideo)
// update video
router.put("/:id", verifyToken, updateVideo)
// delete video
router.delete("/:id", verifyToken, deleteVideo)
// get video
router.get("/find/:id", getVideo)
export default router