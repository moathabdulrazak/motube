import  express from "express";
import {updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike} from '../controllers/users.controller.js'

const router = express.Router()

// get a user

// update a user
router.put('/:id', updateUser)
// delete a user

// subscribe to a user

// unsubscribe to a user

// like a video

// dislike a video



export default router