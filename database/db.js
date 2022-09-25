import mongoose from "mongoose";


const connectDB=(URL)=>{
    mongoose.connect(URL,{dbName:"CRUD",useNewURLParser:true})
}
const studentSchema=mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    address:{type:String},
    mobile:{type:Number},
    fees:{type:mongoose.Decimal128}
})

const studentModel=mongoose.model("student",studentSchema);

export {connectDB,studentModel}