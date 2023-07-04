import express from 'express';
import * as Usercontroller from '../controller/user.controller.js';
const router = express.Router();

// router.get("/testapi",(req,res,next)=>{
//     console.log("webservice request found");
//     res.json({"msg":"success"});
// });

router.post("/save",Usercontroller.save);

router.get("/fetch", Usercontroller.fetch);

router.delete("/delete", Usercontroller.deleteUser);

router.patch("/update",Usercontroller.updateUser);

router.post("/login",Usercontroller.login);

export default router;