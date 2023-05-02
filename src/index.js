const express =require("express")
const app = express()
const port =  4000
require ("dotenv").config() 


//middlewares
app.use(express.json())

//RUTAS
app.use("/api/users",require("./routes/user.routes"))


app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo: ${port}`)
})