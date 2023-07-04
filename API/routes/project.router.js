import express from "express";
import * as ProjectController from '../controller/project.controller.js';

const router = express.Router();

 router.post("/save", ProjectController.save);
 
 router.get("/fetch", ProjectController.fetch);

 router.delete("/delete", ProjectController.deleteProject);
 
 router.patch("/update", ProjectController.updateProject);

export default router;