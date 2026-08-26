import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "Untitled Todo"
    },  // Apne schema me objects ka bhi use kr skte hai jaise title ek object hai, jiski help se apne kuch contraints laga skte hai jaise ki required, default etc.
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoSchema); // Yaha humne Todo model ko export kiya hai taki hum ise apne main.js file me use kar sake. And 'Todo' is the name of the collection in the database.