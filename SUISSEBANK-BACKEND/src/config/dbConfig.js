import mongoose from "mongoose";

mongoose.connect('mongodb+srv://augusto03jose:J2o0s0e3_@bancosuisse.5hd2u.mongodb.net/BancoSuisse');

let db = mongoose.connection;

export default db