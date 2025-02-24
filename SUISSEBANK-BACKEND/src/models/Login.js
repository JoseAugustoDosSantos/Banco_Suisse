import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
    {
        id: {type: String},
        email: {type: String, required: true},
        pwd: {type: String, required: true },
    },
    {
        versionKey: false
    }
);

const logins = mongoose.model("logins", loginSchema);

export default logins;