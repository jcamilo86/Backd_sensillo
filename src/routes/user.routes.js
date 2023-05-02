const {Router} =require("express")
const router= Router()
const {getUser,createUser,updateUser,deleteUser}=require("../controllers/user.controlllers")

 
//READ           
router.get("/",getUser)
//CREATE
router.post("/",createUser) 
//UPDATE
router.put("/:id",updateUser) 
//DELETE
router.delete("/:id",deleteUser) 


module.exports = router;
