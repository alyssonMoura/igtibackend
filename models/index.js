import mongoose from "mongoose";
import students from "./students.js";
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.students = students(mongoose);

export { db };
