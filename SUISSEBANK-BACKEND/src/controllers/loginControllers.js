import { json } from "express";
import logins from '../models/Login.js'

class loginControllers {

    static listLogins = (req,res)=>{
        logins.find((err, logins)=>{
                res.status(200).json({
                    "logins": logins
                })
            })
    }
}

export default loginControllers;