
const { getAllUser,createUser, updateUser ,deleteUser} = require("../controllers/users.controller");
const express=require("express"); 
const router=express.Router();
//or const router=require("express").Router()


router.get("/",getAllUser);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports=router