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
// add views
router.put("/view/:id", addView)
// get trending videos
router.get("/trend", trend)
// get random videos
router.get("/random", random)
// subscribe
router.get("/sub",verifyToken, sub)
// get tags
router.get("/tags", getByTag)
// search
router.get("/search", search)
export default router