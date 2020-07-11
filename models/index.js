import mongoose from "mongoose";
import Students from "./students.js";
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.students = Students(mongoose);

export { db };
