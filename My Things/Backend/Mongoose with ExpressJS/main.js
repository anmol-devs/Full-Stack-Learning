// Apne Mongoose ki mdad se schema bnaenge ki is schema according data store kiya jaaye.

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({ title: "My first todo", desc: "This is my first todo", isDone: false, days: Math.random() * 30 + 5 * Math.random() });
    todo.save() // Save the todo data to the database
    res.send("Hello World!")
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({}) // Yaha async await lgana pda kyuki mongoose ki findOne function async hoti hai. And async ke bina app crash kar jaaega. 
    console.log(todo)
    res.json({ title: todo.title, desc: todo.desc, isDone: todo.isDone, days: todo.days })
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})