const express =require("express")
const app = express()
const port =3000   

app.get("/:nombre",(req,res)=>{
res.json({nombre:req.params.nombre})
})

app.get("/", (req, res)=>{
res.json({nombre:req.query.nombre})
})

app.listen(port, ()=>{
    console.log(`servidor corriendo: ${port}`)
})