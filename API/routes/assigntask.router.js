import express from 'express';
import * as AssignTaskController from '../controller/assigntask.controller.js';
const router = express.Router();

router.post("/save", AssignTaskController.save);

router.get("/fetch", AssignTaskController.fetch);

router.delete("/delete", AssignTaskController.deleteAssigntask);

router.patch("/update", AssignTaskController.updateAssigntask);

export default router;