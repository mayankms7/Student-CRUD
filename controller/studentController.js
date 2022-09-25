import {studentModel} from "../database/db.js";


class StudentController{
    static getAllStudent=async (req,res)=>{
        try{
            const result=await studentModel.find();
            console.log("Got all Students");
            console.log(result);
            res.status(200).json(result);
        }
        catch(err){
            console.log(err);
            res.status(404).json({message:err.message});
        }
    }

    static addStudent=async (req,res)=>{
        try{
            const doc=new studentModel(req.body);
            const result=await doc.save();
            console.log("Save given Students");
            console.log(result);
            res.status(201).json(result);
        }
        catch(err){
            console.log(err);
            res.status(409).json({message:err.message});
        }
    }

    static editStudent=async (req,res)=>{
        try{
            const result=await studentModel.findByIdAndUpdate(req.params.id,new studentModel(req.body),{returnDocument:"after"});
            console.log("Update Students");
            console.log(result);
            res.status(201).json(result);
        }
        catch(err){
            console.log(err);
            res.status(409).json({message:err.message});
        }
    }

    static getStudentById=async (req,res)=>{
        try{
            const result=await studentModel.findById(req.params.id);
            console.log("Got the Students");
            console.log(result);
            res.status(200).json(result);
        }
        catch(err){
            console.log(err);
            res.status(404).json({message:err.message});
        }
    }

    static deleteStudent=async (req,res)=>{
        try{
            const result=await studentModel.findByIdAndDelete(req.params.id);
            console.log("Delete the Students");
            console.log(result);
            res.status(201).json(result);
        }
        catch(err){
            console.log(err);
            res.status(409).json({message:err.message});
        }
    }
}

export default StudentController