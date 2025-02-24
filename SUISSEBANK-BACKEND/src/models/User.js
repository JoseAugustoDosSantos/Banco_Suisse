import { json } from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        balance: {type: Number},
        login: {type: Object, required: true}
    },
    {
        versionKey: false
    }
)

const users = mongoose.model("users", userSchema);

export default users;