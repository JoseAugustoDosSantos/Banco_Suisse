import mongoose from "mongoose";
import users from "../models/User.js";

class usersControllers{
    
    static listUsers = (req, res)=>{
        users.find()
        .populate('login')
        .exec((err, users)=>{
            res.status(200).json({
                "users": users
            });
        });
}

    static includeUsers = (req, res)=>{
        let user = new users(req.body)
        user.save((err)=>{
            res.status(200).json({
                "message": "Usuário criado com sucesso",
                "user": user.toJSON()
            })
        })
    }

    static deleteUsers = (req,res)=>{
        let id = req.params.id
        users.findByIdAndRemove(id,{},(err)=>{
            res.status(200).json({
                "sucess": "item removido"
            })
        })
    }
}

export default usersControllers;