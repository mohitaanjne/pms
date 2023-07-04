import express from 'express';
import * as TaskSubmitionController from '../controller/tasksubmition.controller.js';
const router = express.Router();

router.post("/save", TaskSubmitionController.save);

router.get("/fetch", TaskSubmitionController.fetch);

router.delete("/delete", TaskSubmitionController.deleteSubmition);

router.patch("/update", TaskSubmitionController.updateSubmition);

export default router;