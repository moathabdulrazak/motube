import  express from "express";
import {updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike} from '../controllers/users.controller.js'
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router()

// get a user
router.get('/find/:id',  getUser)
// update a user
router.put('/:id', verifyToken, updateUser)
// delete a user
router.delete('/:id', deleteUser)
// subscribe to a user
router.put('/sub/:id', subscribe)
// unsubscribe to a user
router.put('/unsub/:id', unsubscribe)
// like a video
router.put('/like/:videoId', like)
// dislike a video
router.put('/dislike/:videoId', dislike)


export default router