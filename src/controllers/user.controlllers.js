const {users} = require("../database/db")
const {v4:uuid} = require("uuid")

//READ   
const getUser =(req,res)=>{
    return res.json({
        ok:true,
        msg:"usuarios obtenidos",
        data:users
    })
}

//CREATE
 const createUser = (req,res)=>{
    const{name,curso}=req.body
    const user ={
        id:uuid(),
        name,
        curso,
    }
    users.push(users)
    return res.json({
        ok:true,
        msg:"ususarios agregados",
        data:user
    })
}

//UPDATE
const updateUser = (req,res)=>{
    const {id}=req.params
    const{name,curso}=req.body
    const user=users.find((user)=>user.id ===id)
    user.name = name 
    user.curso = curso
   
    return res.json({
        ok:true,
        msg:"ususarios Actulizado",
        data:user
    })
}

//DELETE
const deleteUser =(req,res)=>{
    const {id}=req.params

    const user=users.find((user)=>user.id ===id)

    users.splice(users.indexOf(user),1)
   
   
    return res.json({
        ok:true,
        msg:"Ususarios Eliminado",
        data:user
    })
}

module.exports = {getUser,createUser,updateUser,deleteUser }