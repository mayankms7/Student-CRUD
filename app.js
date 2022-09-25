import express from "express";
import routes from "./routes/StudentRoutes.js";
import { connectDB, studentModel } from "./database/db.js";

const app = express();
const PORT = 8000;
const URL = "mongodb://localhost:27017";

connectDB(URL);

// studentModel.insertMany([
//   {
//     name: "Himalay",
//     age: 20,
//     address: "Daulatganj",
//     mobile: 9644622667,
//     fees: 41020,
//   },
//   {
//     name: "Akash",
//     age: 21,
//     address: "Thatipur",
//     mobile: 9165089341,
//     fees: 41020,
//   },
//   {
//     name: "Mayank",
//     age: 22,
//     address: "Morar",
//     mobile: 9669838434,
//     fees: 78020,
//   },
//   {
//     name: "Abhinav",
//     age: 19,
//     address: "Station Road",
//     mobile: 9111283345,
//     fees: 90890,
//   },
// ]);
app.use("/", routes);
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`App Running at http://localhost:${PORT}`);
});
