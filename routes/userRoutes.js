const express = require("express");
const { CreateUser, GetAllUser, DeleteUser, UpdateUser } = require("../controller/userController");
const router = express.Router();

router.post("/create", CreateUser)
router.get("/allUser" , GetAllUser)
router.delete("/delete/:id" , DeleteUser )
router.put("/update/:id" ,UpdateUser )


module.exports =  router;