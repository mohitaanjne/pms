import express from "express";
import * as GroupController from '../controller/group.controller.js';

const router = express.Router();

 router.post("/save", GroupController.save);
 
 router.get("/fetch", GroupController.fetch);

 router.delete("/delete", GroupController.deleteGroup);
 
 router.patch("/update", GroupController.updateGroup);

export default router;