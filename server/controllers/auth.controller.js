import mongoose from "mongoose"
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import {createError} from '../utils/ErrorHandler.js'
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err)
  }
};


export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(404, "Wrong password or username"));

    const token = jwt.sign({
      id: user._id,
    }, process.env.JWT );

    // @ts-ignore
    const { password, ...info } = user._doc;

    res.cookie("accessToken", token, {
      httpOnly: "true"
    }).status(200).send(info);
  } catch (error) {
    next(error)
  }
};