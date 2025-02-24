import app from "./src/app.js";
import dotenv from 'dotenv';
dotenv.config();

const port =  process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server listen at http://localhost:${port}`)
})