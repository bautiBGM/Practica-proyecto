import app from "../Practica-proyecto/src/app.js"
import { SERVER_PORT } from "./config/config.js"

app.listen(SERVER_PORT,()=>{
    console.log(SERVER_PORT)
})