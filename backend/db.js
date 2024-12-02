const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://sanket:sanket@cohort.bq8x5.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoTable = mongoose.model('todos', todoSchema);

module.exports = {
    todoTable
}