import express from "express";
import * as AssignProjectController from '../controller/assignproject.controller.js';

const router = express.Router();

 router.post("/save", AssignProjectController.save);
 
 router.get("/fetch", AssignProjectController.fetch);

 router.delete("/delete", AssignProjectController.deleteAssignProject);
 
 router.patch("/update", AssignProjectController.updateAssignProject);

export default router;