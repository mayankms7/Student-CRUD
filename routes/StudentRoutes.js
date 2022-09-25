import express from "express";
import StudentController from "../controller/studentController.js";
const router=express.Router();

router.get("/getAll", StudentController.getAllStudent);
router.post("/add", StudentController.addStudent);
router.put("/edit:id", StudentController.editStudent);
router.get("/:id", StudentController.getStudentById);
router.delete("/delete:id", StudentController.deleteStudent);

export default router;

