const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mayank:mayank%40123@cluster0.vo9vyrf.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports ={
    todo
}